import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursePrevieComp from "../../../../components/mainComponents/HomeScreenComp/CoursePreviewComp";
import { useRoute } from "@react-navigation/native";
import { getAUser, getUsers } from "../../../../helper/api";
import { useQuery } from "react-query";
import Toast from "react-native-toast-message";
import useAuthStore from "../../../../stores";
import useCourseCartStore from "../../../../stores/cartStores";

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  console.log(item, "item");
   const [rating, setRating] = React.useState(0);
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);


  
  const courseCategories = ["Details", "Lessions", "Reviews"];


  //USEQUERY
   const getAllUsers = useQuery(["getAllUsers"], getUsers);

   const {
     data: getAUserInfo,
     error: getAUSerError,
     isLoading: getAUserLoading,
   } = useQuery({
     queryKey: ["UserId"],
     queryFn: () => getAUser(authUser?.others?._id),
   });

  const authUser = useAuthStore((state) => state.authUser);

  const courseData = getAUserInfo?.data?.courses?.find(
    (d) => d._id === item._id
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
 
  // ########### averageRating ########

 

  // console.log(getAUserInfo?.data?.courses, courseData, "getAUserInfo");

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
