import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://refundme-backend.onrender.com/" : "https://refundme-backend.onrender.com/",
  withCredentials: true,
});
