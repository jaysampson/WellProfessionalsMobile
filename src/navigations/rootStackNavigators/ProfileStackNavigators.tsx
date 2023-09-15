import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewProfileScreen from "../../screens/mainScreens/ViewProfileScreen";
import ProfileScreen from "../../screens/mainScreens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigators = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Group>
        <ProfileStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <ProfileStack.Screen
          name="ViewProfileScreen"
          component={ViewProfileScreen}
          options={{ headerShown: false }}
        />
      </ProfileStack.Group>
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigators;
