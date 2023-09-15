import { View, Text, ScrollView } from "react-native";
import React from "react";
import HomeScreenComp from "../../../components/mainComponents/HomeScreenComp";
import { useQuery } from "react-query";
import { getAllCourses, getMeUser } from "../../../helper/api";

const HomeScreen = () => {
  //CALL USEQUERY
  const { isLoading, error, data } = useQuery(["getme"], getMeUser);
  const getCourses = useQuery(["course"], getAllCourses);
 
  

  console.log(data, "data");

  const homeSwiper = [
    {
      id: "1",
      img: require("../../../assets/img/section_1.png"),
      title:
        "We are dedicated to providing comprehensive online courses in the field of oil and gas",
    },
    {
      id: "2",
      img: require("../../../assets/img/section_2.png"),
      title:
        "We are dedicated to providing comprehensive online courses in the field of oil and gas",
    },
    {
      id: "3",
      img: require("../../../assets/img/section_3.png"),
      title:
        "We are dedicated to providing comprehensive online courses in the field of oil and gas",
    },
  ];

  const trendingCourseData = [
    {
      id: "1",
      img: require("../../../assets/img/top_rate_3.png"),
      title: "Introduction to Petroleum Exploration and Production",
    },
    {
      id: "2",
      img: require("../../../assets/img/top_rate_2.png"),
      title: "Drilling Engineering Fundamentals",
    },
    {
      id: "3",
      img: require("../../../assets/img/top_rate_3.png"),
      title: "Reservoir Engineering Principles",
    },
    {
      id: "4",
      img: require("../../../assets/img/top_rate_2.png"),
      title: "Introduction to Petroleum Exploration and Production",
    },
  ];

  const ratedCourseData = [
    {
      id: "1",
      img: require("../../../assets/img/top_rate_3.png"),
      title: " Field Development Planning and Optimization",
    },
    {
      id: "2",
      img: require("../../../assets/img/top_rate_2.png"),
      title: "Health, Safety, and Environment in the Upstream Sector",
    },
    {
      id: "3",
      img: require("../../../assets/img/top_rate_2.png"),
      title: "Health, Safety, and Environment in the Upstream Sector",
    },
  ];
  return (
    <ScrollView>
      <HomeScreenComp
        homeSwiper={homeSwiper}
        trendingCourseData={trendingCourseData}
        ratedCourseData={ratedCourseData}
        isLoading={isLoading}
        error={error}
        data={data}
        getCourses={getCourses}
      />
    </ScrollView>
  );
};

export default HomeScreen;
