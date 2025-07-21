
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { BASE_API } from "../shared/constants/app";

const Http = axios.create({
    baseURL: BASE_API,
    headers: { "Content-Type": "application/json" }
});

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

Http.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

Http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !(originalRequest as any)._retry) {
            (originalRequest as any)._retry = true;
            try {
                const refreshToken = getRefreshToken();
                if (!refreshToken) throw new Error("Chưa có Refresh Token");

                const res = await axios.post(`${BASE_API}/auth/refresh-token`, { refreshToken });
                const newAccessToken = res.data.accessToken;

                localStorage.setItem("accessToken", newAccessToken);
                Http.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return Http(originalRequest);
            } catch (err) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default Http;
