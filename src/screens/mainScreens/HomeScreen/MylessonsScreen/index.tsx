import { View, Text } from 'react-native'
import React from 'react'
import MylessonsComp from '../../../../components/mainComponents/HomeScreenComp/MylessonsComp'

const MylessonsScreen = () => {
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
   const [lessonDetails, setLessonDetails] = React.useState(null);

   

  const lessonCategories = ["Details", "Notes", "Reviews", "More"];

  const selectLessonData = (item) => {
    setLessonDetails(item);
  };
  return (
    <MylessonsComp
      lessonCategories={lessonCategories}
      categoriesIndex={categoriesIndex}
      setCategoriesIndex={setCategoriesIndex}
      selectLessonData={selectLessonData}
      lessonDetails={lessonDetails}
    />
  );
}

export default MylessonsScreen