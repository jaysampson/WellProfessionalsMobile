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

const AppNavigation = () => {
  const { setRequestIsLogged,requestLoggedIn, setAuthUser, authUser } = useAuthStore(
    (state) => state
  );

  const { isLoading, isError, error, data } = useQuery(["getme"], getMeUser,{
    onSuccess(data) {
         setRequestIsLogged(true);
         setAuthUser(data);
    },
  });
  const [isAuthenticated, setIsAuthenticated] = useState(requestLoggedIn);
  const [authLoad, setAuthLoad] = useState(false);

  // console.log(requestLoggedIn,authUser, "authUser")
  // console.log(isLoading, isError, error, data, "555555555555")

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");
      // console.log(user, "authStorage");

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
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
