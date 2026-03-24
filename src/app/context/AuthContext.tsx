import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  hasSubscription: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  subscribe: () => void;
  unsubscribe: () => void;
  setAdminMode: (isAdmin: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setHasSubscription(false);
    setIsAdmin(false);
  };
  const subscribe = () => setHasSubscription(true);
  const unsubscribe = () => setHasSubscription(false);
  const setAdminMode = (admin: boolean) => setIsAdmin(admin);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        hasSubscription,
        isAdmin,
        login,
        logout,
        subscribe,
        unsubscribe,
        setAdminMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
