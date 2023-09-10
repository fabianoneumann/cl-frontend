import { createContext } from "react";
import { useAuth } from "./hooks/useAuth";

type AuthContextType = {
    authenticated: boolean;
    loading: boolean;
    handleLogin: (email: string, password: string) => Promise<void>;
    handleLogout: (value: boolean) => void;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
    const {
      authenticated, loading, handleLogin, handleLogout,
    } = useAuth();

    const handleLoginSubmit = async (email: string, password: string) => {
        await handleLogin(email, password);
      };
  
    return (
      <AuthContext.Provider value={{ authenticated, loading, handleLogin: handleLoginSubmit, handleLogout }}>
        {children}
      </AuthContext.Provider>
    );
  }