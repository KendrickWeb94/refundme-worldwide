import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://refundme-backend.onrender.com/api",
  withCredentials: true, // This is what sends the httpOnly cookie
});
