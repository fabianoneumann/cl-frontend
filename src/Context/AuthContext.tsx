import { createContext } from "react";
import { useAuth } from "./hooks/useAuth";

type AuthContextType = {
    authenticated: boolean;
    setAuthenticated: (value: boolean) => void;
    loading: boolean;
    error: string | undefined;
    handleLogin: (
      email: string, 
      password: string,
    ) => Promise<void>;
    handleRefreshToken: () => Promise<void>;
    handleLogout: () => void;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
    const {
      authenticated, setAuthenticated, loading, error, handleLogin, handleRefreshToken, handleLogout,
    } = useAuth();
    
    const handleLoginSubmit = async (
      email: string, 
      password: string, 
    ) => {
      return await handleLogin(email, password);
    };

    const handleRefreshTokenSubmit = async () => {
      return await handleRefreshToken();
    };
  
    return (
      <AuthContext.Provider 
        value={{ 
          authenticated, 
          setAuthenticated, 
          loading, 
          error, 
          handleLogin: handleLoginSubmit, 
          handleRefreshToken: handleRefreshTokenSubmit, 
          handleLogout 
        }}>
          {children}
      </AuthContext.Provider>
    );
  }