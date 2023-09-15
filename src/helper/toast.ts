import { DeviceEventEmitter } from "react-native";
import { SHOW_TOAST_MESSAGE } from "./constant";

const toast = {
  info: (options) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "info" });
  },
  danger: (options) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "danger" });
  },
  success: (options) => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, { ...options, type: "success" });
  },
};

export default toast