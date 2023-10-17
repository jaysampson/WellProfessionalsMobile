import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AllCoursesComp from "../../../../components/mainComponents/HomeScreenComp/AllCoursesComp";
import { useQuery } from "react-query";
import { getAllCourses } from "../../../../helper/api";
import useAuthStore from "../../../../stores";
import useCourseCartStore from "../../../../stores/cartStores";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const AllCoursesScreen = () => {
  const navigation = useNavigation()
  const authUser = useAuthStore((state) => state.authUser);
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
      Toast.show({
        type: "success",
        text1: `${item.name} added to cart`,
        
      });
    }
    
  };


  // const courseData = authUser.others.courses.map((d) => d._id);
  // console.log(authUser, "courseData");

  const handleOnClick=(item:object)=>{
    navigation.navigate("CoursePreviewScreen", {item});
  }

 
  return (
    <AllCoursesComp
      data={data}
      error={error}
      isLoading={isLoading}
      isError={isError}
      handlAddToCart={handlAddToCart}
      authUser={authUser}
      handleOnClick={handleOnClick}
    />
  );
};

export default AllCoursesScreen;
