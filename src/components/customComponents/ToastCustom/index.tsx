import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DeviceEventEmitter } from "react-native";
import { SHOW_TOAST_MESSAGE } from "../../../helper/constant";



const ToastCustom = () => {
  const [messageType, setMessageType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [timeOutDuration, setTimeOutDuration] = React.useState(5000);
  const timeOutRef = React.useRef(null);

  const color = {
    info: "bg-orange-500",
    success: "bg-green-500",
    danger: "bg-red-500",
  };
  const bgToastColor = color[messageType];

  const onNewToast = (data) => {
    if (data.duration) {
      setTimeOutDuration(duration);
    }
    setMessage(data.message);
    setMessageType(data.type);
  };
const closeToast=()=>{
  setMessage(null);
  setTimeOutDuration(5000)
}
  React.useEffect(()=>{
    if(message){
     timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration((prev) => prev - 1000);
        }
      }, 1000);
    }
    return()=>{
      clearInterval(timeOutRef.current);
    }
  },[message, timeOutDuration])

  console.log(timeOutDuration, "timeOutDuration");

  React.useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }
  return (
    <View
      className={`w-full h-10  rounded-lg items-center justify-center ${bgToastColor}`}
    >
      <TouchableOpacity>
        <Text className="text-white p-2">{message}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToastCustom;
