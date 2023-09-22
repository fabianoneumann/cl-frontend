import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { apiPrivate } from '../../services/api';

export const useApiPrivate = () => {
    const { handleLogin, handleRefreshToken } = useContext(AuthContext);

    useEffect(() => {
        const requestIntercept = apiPrivate.interceptors.request.use(
            config => {
                if (!config.headers.Authorization) {
                    const token = localStorage.getItem('token');

                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                }
                
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = apiPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest.sent) {
                    originalRequest.sent = true;
                    const token = handleRefreshToken();
                    
                    originalRequest.headers.Authorization = `Bearer ${token}`;

                    return apiPrivate(originalRequest);
                }

                return Promise.reject(error);
            }
        );

        return () => {
            apiPrivate.interceptors.request.eject(requestIntercept);
            apiPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [handleLogin, handleRefreshToken]);

    return apiPrivate;
}