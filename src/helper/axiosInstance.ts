import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const ROOT_URL = "https://wellpro-server.onrender.com/api";

const headers = {};

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
  headers,
});
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(token, "axiosInstance")
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
