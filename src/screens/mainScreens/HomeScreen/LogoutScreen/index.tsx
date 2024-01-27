import { View, Text, ActivityIndicator } from "react-native";
import React from 'react'
import useAuthStore from "../../../../stores";
import { storage } from "../../../../mmkvStore";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutScreen = () => {

     const { setRequestIsLogged, requestLoggedIn, setAuthUser, authUser } =
       useAuthStore((state) => ({
         setRequestIsLogged: state.setRequestIsLogged,
         requestLoggedIn: state.requestLoggedIn,
         setAuthUser: state.setAuthUser,
         authUser: state.authUser,
       }));

      React.useEffect(() => {
        // define the async function
        const removeData = async () => {
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("user");
          //  storage.clearAll();
          //  storage.delete("course-storage");
          //  storage.delete("user-storage");
          setRequestIsLogged(false);
          setAuthUser(null);

          Toast.show({
            type: "success",
            text1: authUser?.others?.name,
            text2: " logged out",
          });
        };
        // call the async function
        removeData();
        // optionally, return a cleanup function
        // return () => {
        //   // do some cleanup here
        // };
      }, []);



  return (
    <ActivityIndicator />
  )
}

export default LogoutScreen