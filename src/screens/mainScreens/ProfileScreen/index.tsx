import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileScreenComp from "../../../components/mainComponents/ProfileScreenComp";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CertificateIcon,
  HelpIcon,
  InstructorIcon,
  JoinAffiliateIcon,
  NotificationsIcon,
  PaymentsIcon,
  PrivacyAndPolicyIcon,
  ProfileIcon,
  RateReviewIcon,
  SavedClassesIcon,
  StarredCoursesIcon,
  TermsAndConditionsIcon,
  WatchHistoryIcon,
} from "../../../helper/Icon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import { getMeUser } from "../../../helper/api";
import useAuthStore from "../../../stores";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export type generalTypeData = {
  icon: React.JSX.Element;
  name: string;
  onPress: () => void;
  arrorIcon: React.JSX.Element;
};

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { setRequestIsLogged, requestLoggedIn, setAuthUser, authUser } =
    useAuthStore((state) => state);

  console.log(requestLoggedIn, authUser, "authUser");
  //CALL USEQUERY
  const { isLoading, isError, error, data } = useQuery(["getme"], getMeUser);

  //LOG OUT LOGIC
  const handleLogout = () => {
    console.log("click me");
    Alert.alert("Logout!", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: async () => {
            Toast.show({
              type: "success",
              text1: authUser?.others?.name,
              text2: "You've logging out"
            });
          await AsyncStorage.removeItem("token");
          await AsyncStorage.removeItem("user");
          setRequestIsLogged(false)
          setAuthUser(null)

          console.log("removed");
        },
      },
    ]);
  };

  const generalData: generalTypeData[] = [
    {
      icon: <ProfileIcon width={35} />,
      name: "profile",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <PaymentsIcon />,
      name: "Payments",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <CertificateIcon width={35} />,
      name: "Certificate",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <InstructorIcon width={35} />,
      name: "Become an Instructor",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <NotificationsIcon width={35} />,
      name: "Notifications",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
  ];
  const myClasses: generalTypeData[] = [
    {
      icon: <StarredCoursesIcon width={35} />,
      name: "Starred Courses",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <JoinAffiliateIcon width={35} />,
      name: "Join Affiliate",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <SavedClassesIcon width={35} />,
      name: "Saved Classes",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <WatchHistoryIcon width={35} />,
      name: "Watch History",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
  ];
  const more: generalTypeData[] = [
    {
      icon: <RateReviewIcon width={35} />,
      name: "Rate & Review",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <TermsAndConditionsIcon width={35} />,
      name: "Terms & Conditions",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <PrivacyAndPolicyIcon width={35} color="red" />,
      name: "Privacy & Policy",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
    {
      icon: <HelpIcon width={35} />,
      name: "Help",
      onPress: () => {},
      arrorIcon: (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ),
    },
  ];
  return (
    <ScrollView>
      <ProfileScreenComp
        generalData={generalData}
        myClasses={myClasses}
        more={more}
        handleLogout={handleLogout}
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
