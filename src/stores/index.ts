import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { zustandStorage } from "../mmkvStore";

// import { IUser } from '../api/types';

type Store = {
  authUser: object | null;
  requestLoading: boolean;
  setAuthUser: (user: object) => void;
  setRequestIsLogged: (isLoggedIn: boolean) => void;
};

const authStore = (set) => ({
  authUser: null,
  requestLoggedIn: false,

  setAuthUser: (user: object) => {
    set((state) => ({
      ...state,
      authUser: user,
    }));
  },

  setRequestIsLogged: (isLoggedIn: boolean) => {
    set((state) => ({
      ...state,
      requestLoggedIn: isLoggedIn,
    }));
  },
});

export const useAuthStore = create(
  persist(authStore, {
    name: "user-storage", // unique name
    storage: createJSONStorage(() => zustandStorage), // Add this here!
  })
);

export default useAuthStore;

// const useAuthStore = create(
//   persist(
//     (set, get) => ({
//       authUser: null,
//       requestLoggedIn: false,
//       setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),

//       setRequestIsLogged: (isLoggedIn) =>
//         set((state) => ({ ...state, requestLoggedIn: isLoggedIn })),

//       //COURSES
//     }),
//     {
//       name: "user-storage", // unique name
//       storage: createJSONStorage(() => zustandStorage), // Add this here!
//     }
//   )
// );

// export default useAuthStore;
