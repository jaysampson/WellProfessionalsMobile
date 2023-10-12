import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axiosInstance";
import { storage } from "../mmkvStore";

//REGISTER USERS
export const registerUser = async (form) => {
  const requestPayload = {
    name: form.name || "",
    email: form.email || "",
    country_Code: form.country_Code || "",
    mobile: form.phoneNumber || "",
    password: form.password || "",
  };

  const res = await axiosInstance.post("/user/register", requestPayload);
  console.log(res.data);
  return res.data;
};

// LOGIN USER
export const loginUser = async (users) => {
  const res = await axiosInstance.post("/user/login", users);
  // AsyncStorage.setItem("token", res.data.token);
  // AsyncStorage.setItem("user", JSON.stringify(res.data));
  storage.set("token", res.data.token);
  storage.set("user", JSON.stringify(res.data));

  console.log(res.data);
  return res.data;
};

//GET ME USER
export const getMeUser = async () => {
  const res = await axiosInstance.get("/user/me");
  // console.log(res.data, "getme");
  return res.data;
};

//GET USERS
export const getUsers = async () => {
  const res = await axiosInstance.get("/user/all-users");
  return res.data;
};

//COURSE API
export const getAllCourses = async () => {
  const res = await axiosInstance.get("/course");
  return res.data;
};

//Stripe API
export const createPaymentIntent = async (data: any) => {
  // console.log(data, "amountamount");
  const res = await axiosInstance.post("/stripe/intent", data);
  console.log(res.data, "4444444444444");

  return res.data;
};
