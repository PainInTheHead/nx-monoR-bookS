import axios from "axios";

const axioS = axios.create({
  baseURL: "http://localhost:3005/",
});

axioS.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});



export default axioS;
