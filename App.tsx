import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import AppNavigation from "./src/navigations";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
      <StatusBar style="auto" />
      <Toast />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
