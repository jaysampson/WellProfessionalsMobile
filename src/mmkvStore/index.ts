import { StateStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

// export const storage = new MMKV({
//   id: "user-storage",
//   // path:"course-storage",
// });

export const storage = new MMKV();



export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  // setItem: (name, value) => {
  //   return storage.set("user", JSON.stringify(user));
  // },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};
