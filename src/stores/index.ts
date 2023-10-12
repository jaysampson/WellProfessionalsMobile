import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { zustandStorage } from "../mmkvStore";

// import { IUser } from '../api/types';

type Store = {
  // authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: object) => void;
  setRequestIsLogged: (isLoggedIn: boolean) => void;
};

const useAuthStore = create(
  persist(
    (set, get) => ({
      authUser: null,
      requestLoggedIn: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),

      setRequestIsLogged: (isLoggedIn) =>
        set((state) => ({ ...state, requestLoggedIn: isLoggedIn })),

      //COURSES
    }),
    {
      name: "user-storage", // unique name
      storage: createJSONStorage(() => zustandStorage), // Add this here!
    }
  )
);



export default useAuthStore;
