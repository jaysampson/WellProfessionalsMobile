import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SearchIcon } from "../../../helper/Icon";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import useAuthStore from "../../../stores";

const { width } = Dimensions.get("window");

const HomeScreenComp = ({
  homeSwiper,
  trendingCourseData,
  ratedCourseData,
  isLoading,
  error,
  data,
  getCourses,
}) => {
  const navigation = useNavigation();

  

  return (
    <>
      <View className="py-10 px-6  bg-[#1E1D2F]">
        <View className="flex-row mt-5 justify-between">
          {isLoading && (
            <Text className="text-lg text-white font-[PlusSemiBold]">
              Loading...
            </Text>
          )}
          {error && (
            <Text className="text-lg text-white font-[PlusSemiBold]">
              {/* {error} */}
            </Text>
          )}
          {!isLoading && !error && (
            <Text className="text-lg text-white font-[PlusSemiBold]">
              Hello {data?.others?.name}
            </Text>
          )}

          <TouchableOpacity className="" onPress={() => {}}>
            <Ionicons name="notifications-outline" size={24} color="#ffff" />
          </TouchableOpacity>
        </View>

        <View className="flex-row h-14 mt-7 border border-gray-300 rounded-md items-center ">
          <TouchableOpacity className="w-32 h-11 items-center justify-center bg-[#1E1D2F]">
            <Text className="text-white font-[PlusMedium]">Categories</Text>
          </TouchableOpacity>
          <View className="flex-row flex-1 px-3  h-[54] items-center bg-white justify-between ">
            <TextInput placeholder="Search something" className="  flex-1 " />
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="#A0ABBB" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="w-full h-52 bg-red-600">
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          data={homeSwiper}
          renderItem={({ item }) => (
            <View>
              <ImageBackground
                source={item.img}
                key={item.title}
                style={{ width, height: 250 }}
              >
                <View className="h-18 w-64 my-20 mx-5">
                  <Text className="text-sm  text-white font-[PlusBold] leading-6">
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )}
        />
      </View>
      <View className="py-10 px-6">
        {/* ALl Courses */}
        <View className="flex-row items-center justify-between">
          <Text className=" text-lg font-[PlusBold]">All Courses</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AllCoursesScreen");
            }}
          >
            <Text className="text-xs text-[#AF5E41] font-[PlusSemiBold]">
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View className="py-10">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getCourses?.data?.getCourse?.map((item) => (
              <View className=" flex-row">
                <TouchableOpacity
                  key={item.id}
                  className="w-24 mr-5"
                  onPress={() => {
                    console.log("click", item.id);
                    navigation.navigate("CoursePreviewScreen", { item });
                  }}
                >
                  <View className="bg-red-700 w-24 h-32 rounded-xl">
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <Text className="text-[10px] text-center font-[Plusregular] mt-2">
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* all courses */}
        <View className="flex-row items-center justify-between">
          <Text className=" text-lg font-[PlusBold]">Now Trending Courses</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrendingScreen");
            }}
          >
            <Text className="text-xs text-[#AF5E41] font-[PlusSemiBold]">
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View className="py-10">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getCourses?.data?.getCourse?.map((item) => (
              <View className=" flex-row">
                <TouchableOpacity
                  key={item.id}
                  className="w-24 mr-5"
                  onPress={() => {
                    console.log("click", item.id);
                    navigation.navigate("CoursePreviewScreen", { item });
                  }}
                >
                  <View className="bg-red-700 w-24 h-32 rounded-xl">
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <Text className="text-[10px] text-center font-[Plusregular] mt-2">
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className=" text-lg font-[PlusBold]">Top rated Courses</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TopRatedScreen");
            }}
          >
            <Text className="text-xs text-[#AF5E41] font-[PlusSemiBold]">
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View className="py-10">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {ratedCourseData.map((item) => (
              <View className="flex-row">
                <View className="w-48 h-52 mr-5 " key={item.id}>
                  <View className="h-24">
                    <Image
                      source={item.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    />
                    <View className="flex-row items-center pt-3">
                      <Text className="font-[PlusSemiBold] text-[12px] text-[#CD760F] mr-4">
                        Lorem ipsum{" "}
                      </Text>
                      <Ionicons
                        name="checkmark-circle"
                        size={15}
                        color="black"
                      />
                    </View>
                    <View className="w-40">
                      <Text className="font-[PlusBold] text-[10px]">
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View>
            <Text className="text-[17px] font-[PlusMedium]">
              What course are you looking for?
            </Text>
            <View className="flex-row pt-3">
              <TouchableOpacity className="h-[34px] w-[134px] bg-[#1F1F1F] items-center justify-center mr-3 rounded-full">
                <Text className="text-xs font-[InterRegular] text-white">
                  Lorem ipsum
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-[34px] w-[134px] bg-[#1F1F1F] items-center justify-center mr-5 rounded-full">
                <Text className="text-xs font-[InterRegular] text-white">
                  Lorem ipsum
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreenComp;
