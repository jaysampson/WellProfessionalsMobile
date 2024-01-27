import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import useAuthStore from "../stores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigationRef } from "./RootNavigator";

const AppNavigation = () => {
  const { requestLoggedIn} = useAuthStore(
    (state) =>({
      requestLoggedIn:state.requestLoggedIn,
    })
  );

 
  const [isAuthenticated, setIsAuthenticated] = useState(requestLoggedIn);
  const [authLoad, setAuthLoad] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");
    

      if (user || token) {
        setAuthLoad(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoad(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUser();
  }, [requestLoggedIn]);

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
