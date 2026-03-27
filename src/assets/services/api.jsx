import axios from "axios";

const API = axios.create({
  baseURL: "https://ledgermind-user-service.onrender.com/", // API Gateway
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
///////////////////////////////////////////////////////
// import axios from "axios";

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// export default API;