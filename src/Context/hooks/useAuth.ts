import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";

export function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | undefined>(undefined);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email: string, password: string) {
        try {
            const response = await api.post('auth/login', {
                email,
                password,
            });
                const { token } = response.data;
                // Cookies.set('refreshToken', response.headers['refreshToken'], { expires: refreshToken.sign.expiresIn });
    
                localStorage.setItem("token", JSON.stringify(token));
                api.defaults.headers.Authorization = `Bearer ${token}`;
                setAuthenticated(true);
                setError(undefined);
                return;
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = error.response?.data.message;
                setError(message || "Erro ao fazer login");
            } else {
                setError("Erro ao fazer login");
            }

            return error as string | undefined;
        }
        
        return error;
    }

    // async function handleRefreshToken() {
    //     //get token from Cookies
    //     const token = Cookies.get('refreshToken');
    //     if (!token) {
    //         return;
    //     }
    //     api.defaults.headers.Authorization = `Bearer ${token}`;
        

    //     api.post('auth/refresh-token', {
    //         token,
    //     }).then(response => {
    //         if (response.status !== 200) {
    //             console.log(response);
    //             return;
    //         }

    //         setAuthenticated(true);
    //         const { token } = response.data;
    //         // Cookies.set('refreshToken', response.headers['refreshToken'], { expires: refreshToken.sign.expiresIn }); //TODO: Check expiration time

    //         localStorage.setItem("token", JSON.stringify(token));
    //         api.defaults.headers.Authorization = `Bearer ${token}`;
    //     });
    // }


    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("token");
        delete api.defaults.headers.Authorization;
    }

    return { authenticated, loading, error, handleLogin, handleLogout };
}