import { View, Text, ScrollView } from "react-native";
import React from "react";
// import HomeScreenComp from "../../../components/mainComponents/HomeScreenComp";
import { useQuery } from "react-query";
import { getAUser, getAllCourses, getMeUser } from "../../../helper/api";
import useAuthStore from "../../../stores";
import HomeScreenComp from "../../../components/mainComponents/HomeScreenComp";

const HomeScreen = () => {
  


  //CALL USEQUERY
  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["getme"],
    queryFn: getMeUser,
  });

  const getCourses = useQuery({
    queryKey: ["course"],
    queryFn: getAllCourses,
  });



  //GET TRENDING COURSES
  const getTopTrendingCourses = getCourses?.data?.getCourse.filter(
    (d: any) => d.purchased > 0
  );

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
    <HomeScreenComp
      homeSwiper={homeSwiper}
      ratedCourseData={ratedCourseData}
      isLoading={isLoading}
      error={error}
      data={data}
      getCourses={getCourses}
 
      getTopTrendingCourses={getTopTrendingCourses}
      isError={isError}
    />
  );
};

export default HomeScreen;
