import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursePrevieComp from "../../../../components/mainComponents/HomeScreenComp/CoursePreviewComp";
import { useRoute } from "@react-navigation/native";
import { getUsers } from "../../../../helper/api";
import { useQuery } from "react-query";
import Toast from "react-native-toast-message";
import useAuthStore from "../../../../stores";
import useCourseCartStore from "../../../../stores/cartStores";

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  console.log(item, "item");
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  const authUser = useAuthStore((state) => state.authUser);

  const courseData = authUser.others.courses.find((d) => d._id === item._id);

  const { addToCartItem, getTotalAmount, coursesItem } = useCourseCartStore(
    (state) => ({
      addToCartItem: state.addToCartItem, 
      getTotalAmount: state.getTotalAmount, 
      coursesItem: state.coursesItem,
    })
  );

  // console.log(coursesItem, "coursesItem")
  // console.log(authUser, "authUser344")

  const handlAddToCart = (item) => {
    const courseIsExist = coursesItem?.find((d) => d._id === item._id) 
    if(courseIsExist){
      Toast.show({
        type: "info",
        text1: `${courseIsExist.name} Already added!`
      });
    } else{
      addToCartItem(item);
      getTotalAmount();
      Toast.show({
        type: "success",
        text1: `Added successfully!`,
      });
    }
    
  };

  // ########### averageRating ########
  // const totalRating = item.ratings.length;
  // const sumRatings = item.ratings.reduce(
  //   (acc, rating) => acc + rating.stars,
  //   0
  // );
  // const averageRating = totalRating > 0 ? sumRatings / totalRating : 0;
  // USESTATE
  const [rating, setRating] = React.useState(0);
  // ########### averageRating ########

  const courseCategories = ["Details", "Lessions", "Reviews"];
  const getAllUsers = useQuery(["getAllUsers"], getUsers);

  return (
    <CoursePrevieComp
      courseCategories={courseCategories}
      categoriesIndex={categoriesIndex}
      setCategoriesIndex={setCategoriesIndex}
      item={item}
      getAllUsers={getAllUsers}
      rating={rating}
      setRating={setRating}
      handlAddToCart={handlAddToCart}
      courseData={courseData}
    />
  );
};

export default CoursePreviewScreen;
