import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
// import { apiPrivate } from "../../services/api";
import { useApiPrivate } from "./useApiPrivate";

export function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | undefined>(undefined);
    const apiPrivate = useApiPrivate();

    //TODO: Refactor to remove error and use toast instead

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            apiPrivate.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, [setAuthenticated, apiPrivate]);

    async function handleLogin(email: string, password: string) {
        try {
            const response = await apiPrivate.post('auth/login', {
                email,
                password,
            });
            
            const { token } = response.data;
    
            localStorage.setItem("token", JSON.stringify(token));
            apiPrivate.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            setError(undefined);
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = error.response?.data.message;
                setError(message || "Erro ao fazer login");
                throw new Error(message || "Erro ao fazer login");
            } else {
                setError("Erro ao fazer login");
                throw new Error("Erro ao fazer login");
            }
        }
    }

    async function handleRefreshToken() {
        const token = Cookies.get('refreshToken');
        
        if (!token) {
            return;
        }

        apiPrivate.defaults.headers.Authorization = `Bearer ${token}`;
        
        apiPrivate.patch('auth/refresh', {
            token,
        })
            .then(response => {
                if (response.status !== 200) {
                    console.log(response);
                    return;
                }

                setAuthenticated(true);
                const { token } = response.data;

                localStorage.setItem("token", JSON.stringify(token));
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("token");
        delete apiPrivate.defaults.headers.Authorization;
        Cookies.remove('refreshToken');
    }

    return { authenticated, setAuthenticated, loading, error, handleLogin, handleRefreshToken, handleLogout };
}