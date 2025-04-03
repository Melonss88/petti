import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;          // 用户唯一标识
  phone: string;       // 手机号
  areaCode: string;    // 区号
  name: string;        // 显示名称
  token?: string;      // 模拟token（可选）
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (phone: string, areaCode: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<{
    user: User | null;
    isLoggedIn: boolean;
  }>(() => {
    try {
      const saved = localStorage.getItem("auth");
      return saved ? JSON.parse(saved) : { user: null, isLoggedIn: false };
    } catch (error) {
      console.error("加载auth信息失败:", error);
      return { user: null, isLoggedIn: false };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("auth", JSON.stringify(authState));
    } catch (error) {
      console.error("保存auth信息失败:", error);
    }
  }, [authState]);

  const login = (phone: string, areaCode: string) => {
    const user: User = {
      id: `${areaCode}-${phone}`, // 避免手机号重复问题
      phone,
      areaCode,
      name: `用户${phone.slice(-4)}`, 
      token: `simulated-token-${Date.now()}`, 
    };
    setAuthState({ user, isLoggedIn: true });
  };

  const logout = () => {
    setAuthState({ user: null, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ 
      user: authState.user, 
      isLoggedIn: authState.isLoggedIn,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("必须在 AuthProvider 内使用 useAuth");
  return context;
};
