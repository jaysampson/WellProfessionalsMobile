// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axiosInstance from "./axiosInstance";
// import { storage } from "../mmkvStore";

// //REGISTER USERS
// export const registerUser = async (form) => {
//   const requestPayload = {
//     name: form.name || "",
//     email: form.email || "",
//     country_Code: form.country_Code || "",
//     mobile: form.phoneNumber || "",
//     password: form.password || "",
//   };

//   const res = await axiosInstance.post("/user/register", requestPayload);
//   console.log(res.data);
//   return res.data;
// };

// // LOGIN USER
// export const loginUser = async (users) => {
//   const res = await axiosInstance.post("/user/login", users);
//   AsyncStorage.setItem("token", res.data.token);
//   AsyncStorage.setItem("user", JSON.stringify(res.data));
//   // storage.set("token", res.data.token);
//   // storage.set("user", JSON.stringify(res.data));

//   console.log(res.data);
//   return res.data;
// };

// //GET ME USER
// export const getMeUser = async () => {
//   const res = await axiosInstance.get("/user/me");
//   // console.log(res.data, "getme");
//   return res.data;
// };

// //GET USERS
// export const getUsers = async () => {
//   const res = await axiosInstance.get("/user/all-users");
//   return res.data;
// };

// //GET A USERS
// export const getAUser = async (userId:string) => {
//   const res = await axiosInstance.get(`/user/${userId}`);
//   return res.data;
// };

// //COURSE API
// export const getAllCourses = async () => {
//   const res = await axiosInstance.get("/course");
//   return res.data;
// };
// //COURSE CATEGORY API
// export const getAllCoursesCategory = async () => {
//   const res = await axiosInstance.get("/course/category/all-categories");
//   // console.log(res.data, "rssss")
//   return res.data;
// };

// //COURSE BY CATEGORY  API
// export const coursesByCategory = async (title: string) => {
//   console.log(title, "title");
//   const res = await axiosInstance.get(`/course?category=${title}`);
//   // console.log(res.data.getCourse, "rssss");
//   return res.data.getCourse;
// };

// // search Courses  API
// export const searchCourses = async ( name: string) => {
//   console.log(name, "nametitle");
//   const res = await axiosInstance.get(`/course?name=${name}`);
//   // console.log(res.data.getCourse, "rssss");
//   return res.data.getCourse;
// };

// //Stripe API
// export const createPaymentIntent = async (data: any) => {
//   // console.log(data, "amountamount");
//   const res = await axiosInstance.post("/stripe/intent", data);
//   console.log(res.data, "paymentIntent");

//   return res.data;
// };

// export const createOrder = async (data: any) => {
//   console.log(data, "order67");
//   const res = await axiosInstance.post("/order/create-order", data);
//   console.log(res.data, "orderRes");

//   return res.data;
// };

"use strict";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axiosInstance";
import { storage } from "../mmkvStore";

// Define an interface for the form data
interface Form {
  name: string;
  email: string;
  country_Code: string;
  phoneNumber: string;
  password: string;
}

// Define an interface for the user data
export interface User {
  token: string;
  email: string;
  password: string
  // Add other properties as needed
}

//REGISTER USERS
export const registerUser = async (form: Form): Promise<User> => {
  try {
    const requestPayload = {
      name: form.name || "",
      email: form.email || "",
      country_Code: form.country_Code || "",
      mobile: form.phoneNumber || "",
      password: form.password || "",
    };

    const res = await axiosInstance.post<User>(
      "/user/register",
      requestPayload
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

// LOGIN USER
export const loginUser = async (users: User) => {
  try {
    const res = await axiosInstance.post<User>("/user/login", users);
    AsyncStorage.setItem("token", res.data.token);
    AsyncStorage.setItem("user", JSON.stringify(res.data));
   

    // console.log(res.data);
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//GET ME USER
export const getMeUser = async (): Promise<User> => {
  try {
    const res = await axiosInstance.get<User>("/user/me");
    // console.log(res.data, "getme");
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//GET USERS
export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await axiosInstance.get<User[]>("/user/all-users");
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//GET A USERS
export const getAUser = async (userId: string): Promise<User> => {
  try {
    const res = await axiosInstance.get<User>(`/user/${userId}`);
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//COURSE API
export const getAllCourses = async (): Promise<any[]> => {
  // Define an interface for the course data
  try {
    const res = await axiosInstance.get<any[]>("/course");
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};
//COURSE CATEGORY API
export const getAllCoursesCategory = async (): Promise<any[]> => {
  // Define an interface for the course category data
  try {
    const res = await axiosInstance.get<any[]>(
      "/course/category/all-categories"
    );
    // console.log(res.data, "rssss")
    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//COURSE BY CATEGORY  API
export const coursesByCategory = async (title: string): Promise<any[]> => {
  // Define an interface for the course data
  try {
    console.log(title, "title");
    const res = await axiosInstance.get<any[]>(`/course?category=${title}`);
    // console.log(res.data.getCourse, "rssss");
    return res.data.getCourse;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

// search Courses  API
export const searchCourses = async (name: string): Promise<any[]> => {
  // Define an interface for the course data
  try {
    console.log(name, "nametitle");
    const res = await axiosInstance.get<any[]>(`/course?name=${name}`);
    // console.log(res.data.getCourse, "rssss");
    return res.data.getCourse;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

//Stripe API
export const createPaymentIntent = async (data: any): Promise<any> => {
  // Define an interface for the payment intent data
  try {
    // console.log(data, "amountamount");
    const res = await axiosInstance.post<any>("/stripe/intent", data);
    console.log(res.data, "paymentIntent");

    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

export const createOrder = async (data: any): Promise<any> => {
  // Define an interface for the order data
  try {
    console.log(data, "order67");
    const res = await axiosInstance.post<any>("/order/create-order", data);
    console.log(res.data, "orderRes");

    return res.data;
  } catch (error) {
    // Handle the error as needed
    throw error;
  }
};

