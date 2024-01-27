import { View, Text } from "react-native";
import React from "react";
import SearchComp from "../../../components/mainComponents/SearchComp";
import { useQuery } from "react-query";
import { getAUser, searchCourses } from "../../../helper/api";
import useAuthStore from "../../../stores";
import useCourseCartStore from "../../../stores/cartStores";
import Toast from "react-native-toast-message";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { authUser } = useAuthStore((state) => ({
    authUser: state.authUser,
  }));

  const { addToCartItem, getTotalAmount, coursesItem } = useCourseCartStore(
    (state) => ({
      addToCartItem: state.addToCartItem,
      getTotalAmount: state.getTotalAmount,
      coursesItem: state.coursesItem,
    })
  );

  const { data, error, isLoading } = useQuery({
    queryKey: ["courseCate", searchQuery],
    queryFn: () => searchCourses(searchQuery),
  });

  const { data: getAUserInfo } = useQuery({
    queryKey: ["UserId", authUser?.data?._id],
    queryFn: () => getAUser(authUser?.data?._id),
  });

  // console.log(data, isLoading, "data");

  const handleSearch = (text: string) => {
    console.log(text, "text");
    setSearchQuery(text);
  };

  const handlAddToCart = (item) => {
    const courseIsExist = coursesItem?.find((d) => d._id === item._id);
    if (courseIsExist) {
      Toast.show({
        type: "info",
        text1: `Course is Already added!`,
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


  return (
    <SearchComp
      handleSearch={handleSearch}
      searchQuery={searchQuery}
      data={data}
      isLoading={isLoading}
      authUser={getAUserInfo}
      handlAddToCart={handlAddToCart}
    />
  );
};

export default SearchScreen;
