import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const registerUser = (data) => api.post("/register", data);
export const loginUser = (data) => api.post("/login", data);

// Fetch resources
export const fetchRooms = () => api.get("/rooms");
export const fetchConference = () => api.get("/conference");
export const fetchServices = () => api.get("/services");

// Bookings
export const createBooking = (data) => api.post("/bookings", data);
export const getUserBookings = (userId) => api.get(`/bookings/${userId}`);

export default api;
