import axios from "axios";

// Base URL of your backend
const API_BASE = "http://localhost:5000/api";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization header automatically if JWT token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --------- API CALLS ---------

// Auth
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);

// Rooms
export const getRooms = () => api.get("/rooms");

// Conference Halls
export const getConferenceHalls = () => api.get("/conference");

// Services
export const getServices = () => api.get("/services");

// Bookings
export const createBooking = (data) => api.post("/bookings", data);
export const getUserBookings = (userId) => api.get(`/bookings/${userId}`);

export default api;
