import { View, Text } from "react-native";
import React, { useState } from "react";
import MyCoursesComp from "../../../../components/mainComponents/HomeScreenComp/MyCoursesComp";

export type myCoursesCategoryType = {
  title: string;
  onPress: () => void;
}[];

const MyCoursesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const myCoursesCategory: myCoursesCategoryType = [
    {
      title: "All course",
      onPress: () => {},
    },
    {
      title: "Ongoing",
      onPress: () => {},
    },
    {
      title: "Complated",
      onPress: () => {},
    },
  ];
  return (
    <MyCoursesComp
      myCoursesCategory={myCoursesCategory}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  );
};

export default MyCoursesScreen;
