import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Video, ResizeMode } from "expo-av";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import Details from "../../previewCategoriesComp/Details";
import Lessions from "../../previewCategoriesComp/Lessions";
import Reviews from "../../previewCategoriesComp/Reviews";

const CoursePrevieComp = ({
  courseCategories,
  categoriesIndex,
  setCategoriesIndex,
  item,
  getAllUsers,
  rating,
  setRating,
}) => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [videUrl, setVideUrl] = React.useState(null);

  const selectLesson = (id) => {
    setVideUrl(id);
  };
  const vider_show = item.lessons.find((d) => d._id);

  const selectedText = "bg-[#A2A7A9] text-[#252C32] font-[PlusSemiBold]";
  return (
    <>
      <View className=" py-10 px-6 my-5 ">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            className="w-25 h-6 border border-gray-300"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View />
          <TouchableOpacity>
            <Ionicons name="md-settings-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View className="w-[343] h-[193] rounded-md bg-red-500 relative mt-3">
            <Video
              ref={video}
              resizeMode={ResizeMode.CONTAIN}
              style={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
                borderRadius: 5,
              }}
              source={{
                uri:
                  vider_show?.video ||
                  "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls={true}
              isLooping={true}
            />
          </View>
          <View className="absolute top-20 left-5">
            <View className="w-[49] h-[22] rounded-full bg-slate-400 items-center justify-center">
              <Text className="font-[InterMedium] text-[12px] leading-[18px] text-white">
                Part 1
              </Text>
            </View>
            <Text className="font-[InterMedium] text-[24px] leading-[32px] text-white">
              Introduction
            </Text>
          </View>

          <View className="my-2">
            <Text className="font-[PlusBold] text-[20px]">{item.title}</Text>
            <View className="flex-row items-center mt-1">
              <StarRatingDisplay
                starSize={15}
                rating={rating}
                color="#F8C51B"
                // onChange={setRating}
                starStyle={{ width: 5 }}
              />

              <Text className="font-[InterRegular] mx-5 text-[12px] text-[#5B6871]">
                {item.ratings.length} Ratings
              </Text>
            </View>
            <View className="flex-row items-center mt-1">
              <Text className="font-[PlusMedium] text-[12px] mr-2 text-[#CD760F] mr-2s">
                {
                  getAllUsers?.data?.usersData?.find(
                    (d) => d._id === item.instructor
                  )?.name
                }
              </Text>
              <Ionicons name="checkmark-circle" size={11} color="black" />
            </View>
            <View className="flex-row items-center ">
              <Text className="font-[InterBold] text-[15px] text-[#AF5E41]">
                N{item.price}
              </Text>
              <Text className="mx-3 line-through decoration-double font-[InterRegular] text-[13] text-[#545454]">
                N450.00
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-[#A2A7A9] font-[PlusLight] text-[10px] leading-[15px]">
                1234 members
              </Text>
              <Text className="text-[#A2A7A9] font-[PlusLight] text-[10px] leading-[15px] mx-2">
                {item.lessons.length} lessons
              </Text>
              <Text className="text-[#A2A7A9] font-[PlusLight] text-[10px] leading-[15px]">
                {" "}
                certificate
              </Text>
            </View>
            <View className="flex-row justify-around  bg-[#FDFDFE] my-4  rounded-md ">
              {courseCategories.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className=""
                  onPress={() => {
                    setCategoriesIndex(index);
                  }}
                >
                  <Text
                    className={`font-[Plusregular] text-[14px] text-[#A2A7A9] leading-[24px] px-9 py-2 text-center ${
                      categoriesIndex == index && selectedText
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View>
              {categoriesIndex === 0 && <Details item={item} />}
              {categoriesIndex === 1 && (
                <Lessions item={item} selectLesson={selectLesson} />
              )}
              {categoriesIndex === 2 && (
                <Reviews item={item} getAllUsers={getAllUsers} />
              )}
            </View>
          </View>
        </View>
      </View>
      <View className="h-[0.5] bg-black" />
      <View className="flex-row flex-1 h-[80] bg-white py-2 justify-center ">
        <TouchableOpacity className="w-[64] h-[44] border items-center justify-center mx-3 rounded" onPress={()=>{
          navigation.navigate("CartScreen", {item})
        }}>
          <Text>Icon</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[287] h-[44] bg-[#1E1D2F] justify-center items-center rounded" >
          <Text className="font-[PlusSemiBold] text-white">Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CoursePrevieComp;
