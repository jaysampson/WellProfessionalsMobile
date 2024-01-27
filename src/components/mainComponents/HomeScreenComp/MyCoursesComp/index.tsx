import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { myCoursesCategoryType } from "../../../../screens/mainScreens/HomeScreen/MyCoursesScreen";
import * as Progress from "react-native-progress";
import Spinner from "react-native-loading-spinner-overlay";

type myCourseCompType = {
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  myCoursesCategory: myCoursesCategoryType;
  getAUserInfo: Object;
  getAUserLoading: Boolean;
};

const MyCoursesComp = ({
  myCoursesCategory,
  currentIndex,
  setCurrentIndex,
  getAUserInfo,
  getAUserLoading,
}: myCourseCompType) => {
  const navigation = useNavigation();
  return (
    <>
      <Spinner
        visible={getAUserLoading}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className=" flex-1 bg-white  ">
        <View className="p-5 my-5">
          <View className="flex-row justify-between">
            <TouchableOpacity
              className="w-25 h-6 border border-gray-300"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text className="text-lg text-[#090A0A] font-[InterRegular]">
              My Courses
            </Text>
            <View />
          </View>
          <View>
            <View className="h-[43px] p-[1px] border border-[#706F6F33] my-6 rounded-[5px] flex-row items-center justify-around">
              {myCoursesCategory.map((item: any, index: number) => (
                <>
                  <TouchableOpacity
                    key={index}
                    className={`px-[20px] py-[3px] rounded-[5px]  ${
                      currentIndex === index && "bg-[#AF5E41]"
                    }`}
                    onPress={() => {
                      setCurrentIndex(index), item.onPress();
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
          {getAUserInfo?.data?.courses?.map((item) => (
            <>
              <TouchableOpacity
                className=" h-[131px] px-[16px] py-[15px]"
                onPress={() => {
                  navigation.navigate("MylessonsScreen", { item });
                }}
              >
                <View className="h-[101px] flex-row">
                  <View className="w-24 h-24">
                    <Image
                      source={{ uri: item?.thumbnail?.url }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                        // borderTopRightRadius: 5,
                      }}
                    />
                  </View>
                  <View className=" w-[215px] h-[101px] mx-2">
                    <Text className=" text-[14px] font-[700] font-[Plusregular] leading-[20px]">
                      {item?.name}
                    </Text>
                    <Text className=" text-[10px] font-[600] font-[Plusregular] leading-[14px] text-[#292D32] my-1">
                      by David Udoh
                    </Text>
                    <View className=" w-[79px] h-[20px] bg-[#DCFCE7] items-center rounded-lg">
                      <Text className="text-[#14532D] text-[9px] font-[500] font-[Plusregular] leading-[15px]">
                        Completed
                      </Text>
                    </View>
                    <View className=" flex-row items-center">
                      <Progress.Bar
                        progress={0.3}
                        width={200}
                        color="#AF5E41"
                        unfilledColor="#FFB82E"
                        height={3}
                      />

                      <Text className=" mx-2 text-[#344054] text-[7px] font-[500] font-[Plusregular] leading-[11px]">
                        30%
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          ))}
        </View>
      </View>
    </>
  );
};

export default MyCoursesComp;
