import "react-native-gesture-handler";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import AppNavigation from "./src/navigations";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const STRIPE_KEY =
  "pk_test_51I7cixLahNgJgKKBtOzsCBkrb3LHa0c7fFvktg7J67YHfmveIwFrm0V1NKItGRCz40ZwJi807PQD3kYKl8A8ybIS00lE0VeBMW";
  

export default function App() {
  const [fontsLoaded] = useFonts({
    PlusSemiBold: require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    Plusregular: require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusExtraBold: require("./src/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    PlusMedium: require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusLight: require("./src/assets/fonts/PlusJakartaSans-Light.ttf"),
    PlusBold: require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterBlack: require("./src/assets/fonts/Inter-Black.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <AppNavigation />
        <StatusBar style="auto" />
        <Toast />
      </StripeProvider>
    </QueryClientProvider>
  );
}


