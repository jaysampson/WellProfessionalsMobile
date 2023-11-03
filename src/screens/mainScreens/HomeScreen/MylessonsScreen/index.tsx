import { View, Text } from 'react-native'
import React from 'react'
import MylessonsComp from '../../../../components/mainComponents/HomeScreenComp/MylessonsComp'

const MylessonsScreen = () => {
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  const lessonCategories = ["Details", "Notes", "Reviews", "More"];
  return (
    <MylessonsComp
      lessonCategories={lessonCategories}
      categoriesIndex={categoriesIndex}
      setCategoriesIndex={setCategoriesIndex}
    />
  );
}

export default MylessonsScreen