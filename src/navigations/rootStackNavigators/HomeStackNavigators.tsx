import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/mainScreens/HomeScreen";
import TopRatedScreen from "../../screens/mainScreens/TopRatedScreen";
import TrendingScreen from "../../screens/mainScreens/TrendingScreen";
import ViewProfileScreen from "../../screens/mainScreens/ViewProfileScreen";
import CoursePreviewScreen from "../../screens/mainScreens/CoursePreviewScreen";
import CourseReviewScreen from "../../screens/mainScreens/CourseReviewScreen";
import AllCoursesScreen from "../../screens/mainScreens/AllCoursesScreen";
import CartScreen from "../../screens/mainScreens/CartScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigators = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TopRatedScreen"
          component={TopRatedScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TrendingScreen"
          component={TrendingScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="AllCoursesScreen"
          component={AllCoursesScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewProfileScreen"
          component={ViewProfileScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CoursePreviewScreen"
          component={CoursePreviewScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CourseReviewScreen"
          component={CourseReviewScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigators;
