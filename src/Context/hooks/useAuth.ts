import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email: string, password: string) {
        await api.post('auth/login', {
            email,
            password,
        }).then(response => {
            if (response.status !== 200) {
                console.log(response);
                return;
            }

            const { token } = response.data;
            // Cookies.set('refreshToken', response.headers['refreshToken'], { expires: refreshToken.sign.expiresIn });

            localStorage.setItem("token", JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            //TODO: redirect to dashboard
        });
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

    return { authenticated, loading, handleLogin, handleLogout };
}