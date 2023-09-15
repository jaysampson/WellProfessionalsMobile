import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import OnboardingScreen from "../screens/authScreens/OnboardingScreen";
import ForgotPasswordScreen from "../screens/authScreens/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/authScreens/ResetPaswwordScreen";
import { AuthStackParamList } from "../types/navigations";



const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = ()=>{

    return (
      <AuthStack.Navigator screenOptions={{ header: () => null }}>
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <AuthStack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />
      </AuthStack.Navigator>
    );

}

export default AuthNavigator;