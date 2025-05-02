// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://refundme-backend.onrender.com/api", // Automatically prefixes all requests with /api
  withCredentials: true, // Ensures cookies are sent for auth
});
