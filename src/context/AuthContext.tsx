import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Simulate login - would normally validate with backend
    setUser({ email, password });
  };

  const register = (email: string, password: string) => {
    // Simulate registration - would normally send to backend
    setUser({ email, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}