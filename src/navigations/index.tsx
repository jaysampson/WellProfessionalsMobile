import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import useAuthStore from "../stores";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeUser } from "../helper/api";
import { storage } from "../mmkvStore";
import { navigationRef } from "./RootNavigator";

const AppNavigation = () => {
  const { setRequestIsLogged,requestLoggedIn, setAuthUser, authUser } = useAuthStore(
    (state) =>({
      setRequestIsLogged: state.setRequestIsLogged,
      requestLoggedIn:state.requestLoggedIn,
      setAuthUser:state.setAuthUser,
      authUser: state.authUser

    })
  );

  // const { isLoading, isError, error, data } = useQuery(["getme"], getMeUser,{
  //   onSuccess(data) {
  //        setRequestIsLogged(true);
  //        setAuthUser(data);
  //   },
  // });
  const [isAuthenticated, setIsAuthenticated] = useState(requestLoggedIn);
  const [authLoad, setAuthLoad] = useState(false);

// console.log(authUser, "authUserNav");
  const getUser = async () => {
    try {
      // const user = await AsyncStorage.getItem("user");
      // const token = await AsyncStorage.getItem("token");
      const user = storage.getString("user");
      const token = storage.getString("token");

      console.log(user, "authStorage");

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
