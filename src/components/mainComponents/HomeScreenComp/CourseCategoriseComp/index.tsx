import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Ionicons, EvilIcons } from "@expo/vector-icons";
import { myCoursesCategoryType } from "../../../../screens/mainScreens/HomeScreen/CourseCategories";
import Spinner from "react-native-loading-spinner-overlay";



type Props = {
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  myCoursesCategory: myCoursesCategoryType[];
  handleCategory: (id: string) => void;
  data: any;
  isLoading: boolean;
  authUser: any;
  handlAddToCart:(item:any)=>void;
};

const CourseCategoriesComp = ({
  myCoursesCategory,
  currentIndex,
  setCurrentIndex,
  handleCategory,
  data,
  isLoading,
  authUser,
  handlAddToCart,
}: Props) => {
  const navigation = useNavigation();

  console.log(authUser, "authUser");

  const selectedText =
    "bg-[#E5E9EB] text-[#252C32] text-[14px] font-[600] font-[Plusregular] leading-[24px] tracking-[-0.084px]";

  return (
    <>
      <Spinner
        visible={isLoading}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className=" flex-1 bg-white pt-16 pb-1  px-6 ">
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="w-25 h-6 border border-gray-300"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] text-[#090A0A] font-[InterRegular]">
            Category
          </Text>
          <View />
        </View>
        {/* <View className=" h-[92px] items-center mt-6">
          <Text className="text-[35px] font-[700] font-[Plusregular] leading-[36px]">
            All Categories
          </Text>
          <Text className="text-[16px] font-normal text-[#6C7072] font-[Plusregular] leading-[24px]">
            consectetur adipiscing elit, sed do
          </Text>
        </View> */}

        <View>
          <View className="h-[43px] p-[1px] border border-[#706F6F33] rounded-[5px] flex-row items-center justify-around mt-5">
            {myCoursesCategory.map((item: any, index: number) => (
              <>
                <TouchableOpacity
                  key={item.id}
                  className={`px-[20px] py-[3px] rounded-[5px]  ${
                    currentIndex === index && "bg-[#AF5E41]"
                  }`}
                  onPress={() => {
                    setCurrentIndex(index);
                    handleCategory(item.id);
                  }}
                >
                  <Text
                    className={` text-[14px] font-[500] text-[#1E1D2F] font-[Plusregular] leading-[25px] ${
                      currentIndex === index && "text-white"
                    }`}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.map((item: any) => (
            <TouchableOpacity
              className="  h-[118px]  flex-row items-center"
              onPress={() => {
                navigation.navigate("CoursePreviewScreen", { item });
              }}
            >
              <View className=" w-[145px] h-[98.88px]  m-[10px]">
                <Image
                  source={{
                    uri:
                      item?.thumbnail?.url ||
                      "https://www.pngitem.com/pimgs/m/140-1403686_science-technology-and-engineering-courses-hd-png-download.png",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View className=" h-[98.88px] rounded  ">
                <Text className="text-[11px] font-[700] font-[Plusregular] leading-[20px]">
                  {item?.name}
                </Text>
                <Text className="text-[7px] font-[700] font-[Plusregular] text-[#242E21] leading-normal my-1">
                  {item.purchased} {}
                  {item.purchased <= 1 ? "Student" : "Students"}
                </Text>
                <View className=" flex-row items-center my-1">
                  <Text className="text-[10px] font-[700] font-[Plusregular] mr-2 leading-[18px]">
                    ₦{item.price}
                  </Text>
                  <Text className="text-[9px] font-[400] font-[Plusregular] line-through decoration-double leading-[15px]">
                    ₦449.99
                  </Text>
                </View>
                <View className=" flex-row items-center">
                  <TouchableOpacity
                    className=" w-[64px] h-[20px]  border border-[#CBCBCB] rounded-[5px] mr-2 items-center justify-center"
                    onPress={() => {
                      authUser?.data?.courses.find((d) => d._id === item._id)
                        ? navigation.navigate("MyCoursesScreen", { item })
                        : handlAddToCart(item);
                    }}
                  >
                    <Text className="text-[8px] font-[600] font-[Plusregular]   leading-[13px]">
                      {authUser?.data?.courses.find((d) => d._id === item._id)
                        ? "Go to course"
                        : " Add to cart"}
                      {/* Add to cart */}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CourseCategoriesComp;
