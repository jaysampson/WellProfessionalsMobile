import { View, Text, ScrollView } from "react-native";
import React from 'react'
import TrendingComp from '../../../components/mainComponents/TrendingComp'
import { Ionicons } from "@expo/vector-icons";



const TrendingScreen = () => {

  const trendingData = [
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Reservoir Engineering Principles",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Health, Safety, and Environment in the Upstream",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Field Development Planning and Optimization",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Machine Learning in Oil and Gas",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Machine Learning in Oil and Gas",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
    {
      img: require("../../../assets/img/top_rate_3.png"),
      author: "Lorem ipsum",
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      topic: "Machine Learning in Oil and Gas",
      images: require("../../../assets/img/top_rate_3.png"),
      numberOfStudent: "888 Student",
      amount: "N289.00",
    },
  ];
  return (
      <TrendingComp trendingData={trendingData} />
  ); 
}

export default TrendingScreen