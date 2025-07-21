/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import Api from "../services/Api";

interface AuthContextType {
    isLoggedIn: boolean;
    loading: boolean;
    login: (username: string) => Promise<void>;
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    loading: true,
    login: async () => { },
    logout: () => { }
})
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        setIsLoggedIn(!!token)
        setLoading(false)
    }, [])

    const login = async (username: string) => {
        try {
            const res = await Api.login(username);

            if (res.data?.code === 401 || !res.data?.accessToken || !res.data?.refreshToken) {
                throw new Error("Tên đăng nhập không đúng.");
            }

            // Lưu token vào localStorage
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            setIsLoggedIn(true);
        } catch (error: any) {
            setIsLoggedIn(false);
            throw "Đăng nhập thất bại";
        }
    };


    const logout = () => {
        Api.logout();
        setIsLoggedIn(false);
        window.location.href = "/login";
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);

