import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { storage } from "../mmkvStore";
// import { navigate } from "../navigations/RootNavigator";
import * as RootNavigation from "../navigations/RootNavigator";


const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTgyNWU1ZDM4YzNjMzY4ODYxYzk1NyIsImlhdCI6MTY5OTAyMTk3MCwiZXhwIjoxNjk5MTA4MzcwfQ.WZPAPpbIEzaHERBdO6tWTyCPg_ypWzsC1aASfxWzs7Y";

const ROOT_URL = "https://wellpro-server.onrender.com/api";

const headers = {};

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
  headers,
});
axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem("token");
    const token = storage.getString("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers.Authorization = `Bearer token`;
    }
    console.log(token, "axiosInstance");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      RootNavigation.navigate("HomeStackNavigators",{screen:"LogoutScreen", tokenExpired: true });
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
