import { View, Text } from "react-native";
import React from "react";
import CourseCategoriesComp from "../../../../components/mainComponents/HomeScreenComp/CourseCategoriseComp";
import { useQuery } from "react-query";
import {
  coursesByCategory,
  getAUser,
  getAllCoursesCategory,
} from "../../../../helper/api";
import useAuthStore from "../../../../stores";
import useCourseCartStore from "../../../../stores/cartStores";
import Toast from "react-native-toast-message";

export type myCoursesCategoryType = {
  title: string;
  id: string;
}[];

const CourseCategories = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [categoryTitle, setCategoryTitle] = React.useState("Topstream");
  const authUser = useAuthStore((state) => state.authUser);

  const { addToCartItem, getTotalAmount, coursesItem } = useCourseCartStore(
    (state) => ({
      addToCartItem: state.addToCartItem,
      getTotalAmount: state.getTotalAmount,
      coursesItem: state.coursesItem,
    })
  );

  //  console.log(data,error, "courseCate234");
  const handleCategory = (id: string) => {
    setCategoryTitle(id);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["courseCate", categoryTitle],
    queryFn: () => coursesByCategory(categoryTitle),
  });

  // console.log(data, error, isLoading, "categoryTitle");


   const handlAddToCart = (item) => {
     const courseIsExist = coursesItem?.find((d) => d._id === item._id);
     if (courseIsExist) {
       Toast.show({
         type: "info",
         text1: `Course Already added!`,
       });
     } else {
       addToCartItem(item);
       getTotalAmount();
       Toast.show({
         type: "success",
         text1: `${item.name} added to cart`,
       });
     }
   };

  const myCoursesCategory: myCoursesCategoryType = [
    {
      id: "Topstream",
      title: "Top Stream",
    },
    {
      id: "Midstream",
      title: "Mid Stream",
    },
    {
      id: "Downstream",
      title: "Down Stream",
    },
  ];


  //USEQUERY
   const { data: getAUserInfo } = useQuery({
     queryKey: ["UserId", authUser?.data?._id],
     queryFn: () => getAUser(authUser?.data?._id),
   });


  return (
    <CourseCategoriesComp
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      myCoursesCategory={myCoursesCategory}
      handleCategory={handleCategory}
      data={data}
      isLoading={isLoading}
      authUser={getAUserInfo}
      handlAddToCart={handlAddToCart}
    />
  );
};

export default CourseCategories;
