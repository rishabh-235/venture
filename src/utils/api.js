import axios from "axios";

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1",
  withCredentials: true,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const loginUser = (credentials) => {
  return api.post("/user/login", credentials);
};

export const registerUser = (userData) => {
  return api.post("/user/register", userData);
};

export const logoutUser = () => {
  return api.post("/user/logout");
};

export const getCurrentUser = () => {
  return api.get("/user/current");
};

// Startup API functions
export const getStartups = (params = {}) => {
  return api.get("/startup", { params });
};

export const getStartupById = (id) => {
  return api.get(`/startup/${id}`);
};

export const createStartup = (startupData) => {
  return api.post("/startup", startupData);
};

export const updateStartup = (id, startupData) => {
  return api.put(`/startup/${id}`, startupData);
};

// Investor API functions
export const getInvestors = (params = {}) => {
  return api.get("/investor", { params });
};

export const getInvestorById = (id) => {
  return api.get(`/investor/${id}`);
};

export const registerInvestor = (investorData) => {
  return api.post("/investor/register", investorData);
};

// Payment API functions
export const createPayment = (paymentData) => {
  return api.post("/payment/create", paymentData);
};

export const verifyPayment = (paymentData) => {
  return api.post("/payment/verify", paymentData);
};

export default api;
