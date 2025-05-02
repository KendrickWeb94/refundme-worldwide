// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://refundme-backend.onrender.com/api",
  withCredentials: true,
});

