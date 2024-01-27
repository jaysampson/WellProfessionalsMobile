import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/mainScreens/HomeScreen";

import ViewProfileScreen from "../../screens/mainScreens/ProfileScreen/ViewProfileScreen";
import CoursePreviewScreen from "../../screens/mainScreens/HomeScreen/CoursePreviewScreen";
import CourseReviewScreen from "../../screens/mainScreens/HomeScreen/CourseReviewScreen";
import AllCoursesScreen from "../../screens/mainScreens/HomeScreen/AllCoursesScreen";
import CartScreen from "../../screens/mainScreens/CartScreen";
import TopRatedScreen from "../../screens/mainScreens/HomeScreen/TopRatedScreen";
import TrendingScreen from "../../screens/mainScreens/HomeScreen/TrendingScreen";
import CourseCategories from "../../screens/mainScreens/HomeScreen/CourseCategories";
import ListCategories from "../../components/mainComponents/HomeScreenComp/CourseCategoriseComp/ListCategories";
import SearchScreen from "../../screens/mainScreens/SearchScreen";
import MyCoursesScreen from "../../screens/mainScreens/HomeScreen/MyCoursesScreen";
import MylessonsScreen from "../../screens/mainScreens/HomeScreen/MylessonsScreen";
import LogoutScreen from "../../screens/mainScreens/HomeScreen/LogoutScreen";

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
        <HomeStack.Screen
          name="CourseCategories"
          component={CourseCategories}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ListCategories"
          component={ListCategories}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MyCoursesScreen"
          component={MyCoursesScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MylessonsScreen"
          component={MylessonsScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="LogoutScreen"
          component={LogoutScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigators;
