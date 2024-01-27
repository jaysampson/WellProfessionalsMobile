import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CartActiveIcon,
  CartIcon,
  FeaturedIcon,
  HomeActiveIcon,
  HomeIcon,
  ProfileActiveIcon,
  ProfileIcon,
  SearchAciveIcon,
  SearchIcon,
} from "../helper/Icon";
import HomeStackNavigators from "./rootStackNavigators/HomeStackNavigators";
import { HomeStackParamList } from "../types/navigations";
import ProfileStackNavigators from "./rootStackNavigators/ProfileStackNavigators";
import CartScreen from "../screens/mainScreens/CartScreen";
import SearchScreen from "../screens/mainScreens/SearchScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Icon from "../components/customComponents/CustomIcon";

const HomeStack = () => {};
const Tab = createBottomTabNavigator<HomeStackParamList>();

function DummyScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text>Am a Dummy Screen</Text>
    </View>
  );
}

const HomeNavigator = () => {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    if (routeName === "CoursePreviewScreen") {
      return "none";
    }
    return "flex";
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            let type;
            if (route.name === "HomeStackNavigators") {
              iconName = focused ? <HomeActiveIcon /> : <HomeIcon />;
              size = focused ? 20 : 18;
              color = focused ? "#AF5E41" : "#0000";
              type = focused ? "HomeActiveIcon" : "HomeIcon";
            } else if (route.name === "Featured") {
              iconName = <FeaturedIcon />;
              size = focused ? 20 : 18;
              color = focused ? "#AF5E41" : "#0000";
            } else if (route.name === "SearchScreen") {
              iconName = focused ? <SearchAciveIcon /> : <SearchIcon />;
              size = focused ? 20 : 18;
              color = focused ? "#AF5E41" : "#0000";
              type = focused ? "SearchAciveIcon" : "SearchIcon";
            } else if (route.name === "CartScreen") {
              iconName = focused ? <CartActiveIcon /> : <CartIcon />;
              size = focused ? 20 : 18;
              color = focused ? "#AF5E41" : "#0000";
              type = focused ? "CartActiveIcon" : "CartIcon";
            } else if (route.name === "ProfileStackNavigators") {
              iconName = focused ? <ProfileActiveIcon /> : <ProfileIcon />;
              size = focused ? 20 : 18;
              color = focused ? "#AF5E41" : "#0000";
              type = focused ? "ProfileActiveIcon" : "ProfileIcon";
            }
            return (
              <Icon type={type} name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "#AF5E41",
          // tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "rgba(175, 94, 65, 0.2)",
          // tabBarLabelPosition: "beside-icon",
        })}
      >
        <Tab.Screen
          name="HomeStackNavigators"
          component={HomeStackNavigators}
          options={({ route }) => ({
            tabBarLabel: "Home",
            tabBarStyle: { display: getTabBarVisibility(route) },
          })}
        />
        {/* <Tab.Screen
          name="Featured"
          component={DummyScreen}
          options={{
            tabBarLabel: "Featured",
          }}
        /> */}
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
          }}
        />
        <Tab.Screen
          name="ProfileStackNavigators"
          component={ProfileStackNavigators}
          options={{
            tabBarLabel: "Profile",
            // tabBarStyle: { display: getTabBarVisibility(route) },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigator;
