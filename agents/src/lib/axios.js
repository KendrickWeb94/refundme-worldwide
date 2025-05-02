// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://refundme-backend.onrender.com/api",
  withCredentials: true,
});

// 🔐 Always attach the latest token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
