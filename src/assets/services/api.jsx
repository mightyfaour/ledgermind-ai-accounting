import axios from "axios";

const API = axios.create({
  baseURL: "/", // Proxied via vite.config.js
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");
  const isPublicRoute = req.url.includes("login") || req.url.includes("register");

  if (token && !isPublicRoute) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;