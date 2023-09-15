import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursePrevieComp from "../../../components/mainComponents/CoursePreviewComp";
import { useRoute } from "@react-navigation/native";
import { getUsers } from "../../../helper/api";
import { useQuery } from "react-query";

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  // console.log(item, "item");
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  // ########### averageRating ########
  const totalRating = item.ratings.length;
  const sumRatings = item.ratings.reduce(
    (acc, rating) => acc + rating.stars,
    0
  );
  const averageRating = totalRating > 0 ? sumRatings / totalRating : 0;
  // USESTATE
  const [rating, setRating] = React.useState(averageRating);
  // ########### averageRating ########


  const courseCategories = ["Details", "Lessions", "Reviews"];
  const getAllUsers = useQuery(["getAllUsers"], getUsers);

  return (
    <ScrollView>
      <CoursePrevieComp
        courseCategories={courseCategories}
        categoriesIndex={categoriesIndex}
        setCategoriesIndex={setCategoriesIndex}
        item={item}
        getAllUsers={getAllUsers}
        rating={rating}
        setRating={setRating}
      />
    </ScrollView>
  );
};

export default CoursePreviewScreen;
