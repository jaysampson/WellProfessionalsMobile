import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursePrevieComp from "../../../../components/mainComponents/HomeScreenComp/CoursePreviewComp";
import { useRoute } from "@react-navigation/native";
import { getUsers } from "../../../../helper/api";
import { useQuery } from "react-query";
import useAuthStore from "../../../../stores";
import { useCartStore } from "../../../../stores/cartStores";

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  // console.log(item, "item");
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
 
   const { authUser } = useAuthStore((state) => state);

   const courseData = authUser.others.courses.find((d)=> d._id === item._id);

const { addToCartItem, getTotalAmount } = useCartStore(
  (state) => state
);
  

  const handlAddToCart = (item) => {
    // console.log(item, "item ggg");

    addToCartItem(item);
    getTotalAmount()
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
