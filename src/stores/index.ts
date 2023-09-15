import {create} from 'zustand';
import { persist } from "zustand/middleware";

// import { IUser } from '../api/types';

type Store = {
  // authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestIsLogged: (isLoggedIn: boolean) => void;
};

const useAuthStore = create(
 
    (set) => ({
      authUser: null,
      requestLoggedIn: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
      setRequestIsLogged: (isLoggedIn) =>
        set((state) => ({ ...state, requestLoggedIn: isLoggedIn })),
    }),
   
);

export default useAuthStore;