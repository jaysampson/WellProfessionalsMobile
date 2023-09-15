import { View, Text } from "react-native";
import React from "react";
import OnboardinComp from "../../../components/authComponents/OnboardingComp";
import { useNavigation } from "@react-navigation/native";
import { TypeSlider } from "../../../types/authTypes";

const OnboardingScreen = () => {
  const Slider: TypeSlider[] = [
    {
      id: "1",
      img: require("../../../assets/images/onboard_2.png"),
      title: "Lorem ipsum dolor amet, consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "2",
      img: require("../../../assets/images/onboard_2.png"),
      title: "Lorem ipsum dolor amet, consectetur",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "3",
      img: require("../../../assets/images/onboard_3.png"),
      title: "Join to building the future.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  return <OnboardinComp slider={Slider} />;
};

export default OnboardingScreen;
