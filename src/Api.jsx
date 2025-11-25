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


export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);


export const getRooms = () => api.get("/rooms");


export const getConferenceHalls = () => api.get("/conference");


export const getServices = () => api.get("/services");


export const createBooking = (data) => api.post("/bookings", data);
export const getUserBookings = (userId) => api.get(`/bookings/${userId}`);

export default api;
