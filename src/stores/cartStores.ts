import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { zustandStorage } from "../mmkvStore";


export const useCartStore = create(
  // persist(
  (set, get) => ({
    coursesItem: [],
    totalAmount: 0,
    addToCartItem: (item) =>
      set((state) => ({ coursesItem: [...state.coursesItem, item] })),

    removeFromCart: (itemId) =>
      set((state) => ({
        coursesItem: state.coursesItem.filter((item) => item._id !== itemId),
      })),

    getTotalAmount: () =>
      set((state) => ({
        totalAmount: state.coursesItem.reduce(
          (total, item) => total + item.price,
          0
        ),
      })),
  })

  // {
  //   name: "user-storage", // unique name
  //   storage: createJSONStorage(() => zustandStorage), // Add this here!
  // }
  // )
);
