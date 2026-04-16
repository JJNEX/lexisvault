
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type AuthContextType = {
  userEmail: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function login(email: string, password: string) {
    const response = await api.post("/auth/login", { email, password });
    const token = response.data.token;

    localStorage.setItem("token", token);

    const meResponse = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUserEmail(meResponse.data);
  }

  function logout() {
    localStorage.removeItem("token");
    setUserEmail(null);
  }

  // 🔥 RESTAURA LOGIN AO DAR F5
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserEmail(response.data);
      } catch {
        localStorage.removeItem("token");
        setUserEmail(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userEmail, login, logout, loading, isAuthenticated: !!userEmail,}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
