import axios from "axios";

// Function to get the token dynamically
const getToken = () => {
  return localStorage.getItem("token");  // Retrieve token dynamically each time
};

export const axiosInstance = axios.create({
  baseURL: "https://refundme-backend.onrender.com/api",  // Automatically prefixes all requests with /api
  withCredentials: true,  // Ensures cookies are sent for auth
});

// Add request interceptor to dynamically add the Authorization header
axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

