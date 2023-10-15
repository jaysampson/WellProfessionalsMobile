import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AllCoursesComp from "../../../../components/mainComponents/HomeScreenComp/AllCoursesComp";
import { useQuery } from "react-query";
import { getAllCourses } from "../../../../helper/api";
import useAuthStore from "../../../../stores";
import useCourseCartStore from "../../../../stores/cartStores";
import Toast from "react-native-toast-message";

const AllCoursesScreen = () => {
  // const getCourses = useQuery(["course"], getAllCourses);
  const { data, error, status, isLoading, isError } = useQuery(
    ["course"],
    getAllCourses
  );

  const { addToCartItem, getTotalAmount, coursesItem } = useCourseCartStore(
    (state) => ({
      addToCartItem: state.addToCartItem, 
      getTotalAmount: state.getTotalAmount, 
      coursesItem: state.coursesItem,
    })
  );


  const handlAddToCart = (item) => {
    const courseIsExist = coursesItem?.find((d) => d._id === item._id) 
    if(courseIsExist){
      Toast.show({
        type: "info",
        text1: `${courseIsExist.name} is Already added!`
      });
    } else{
      addToCartItem(item);
      getTotalAmount();
    }
    
  };

  const  authUser  = useAuthStore((state) => state.authUser);

  const courseData = authUser.others.courses.map((d) => d._id);
  console.log(courseData, "courseData")

 
  return (
    <AllCoursesComp
      data={data}
      error={error}
      isLoading={isLoading}
      isError={isError}
      handlAddToCart={handlAddToCart}
    />
  );
};

export default AllCoursesScreen;
