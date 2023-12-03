import { View, Text } from "react-native";
import React, { useState } from "react";
import MyCoursesComp from "../../../../components/mainComponents/HomeScreenComp/MyCoursesComp";
import { useQuery } from "react-query";
import { getAUser, getMeUser } from "../../../../helper/api";
import useAuthStore from "../../../../stores";

export type myCoursesCategoryType = {
  title: string;
  onPress: () => void;
}[];

const MyCoursesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const authUser = useAuthStore((state) => state.authUser);

  const { isLoading, error, data, isError } = useQuery(["getme"], getMeUser);

const {
  data: getAUserInfo,
  error: getAUSerError,
  isLoading: getAUserLoading,
} = useQuery({
  queryKey: ["UserId"],
  queryFn: () => getAUser(authUser?.others?._id),
});
  console.log(getAUserInfo, "getAUserInfo");

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
      getAUserInfo={getAUserInfo}
      getAUserLoading={getAUserLoading}
    />
  );
};

export default MyCoursesScreen;
