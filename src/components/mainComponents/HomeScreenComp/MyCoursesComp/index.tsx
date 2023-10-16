import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { myCoursesCategoryType } from "../../../../screens/mainScreens/HomeScreen/MyCoursesScreen";
import * as Progress from "react-native-progress";

type myCourseCompType = {
  currentIndex: number;
  setCurrentIndex: (currentIndex:number) => void;
  myCoursesCategory: myCoursesCategoryType;
};


const MyCoursesComp = ({ myCoursesCategory, currentIndex, setCurrentIndex }: myCourseCompType) => {
  const navigation = useNavigation();
  return (
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
          My Courses
        </Text>
        <View />
      </View>
      <View>
        <View className=" w-[343px]  h-[43px] p-[1px] border mx-auto my-6 rounded-[5px] flex-row items-center justify-around">
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
      <View className=" h-[131px] px-[16px] py-[15px]">
        <View className="w-[343px] h-[101px] flex-row">
          <View className="w-[100px] h-[100px]">
            <Image
              source={require("../../../../assets/img/course_1.png")}
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
              Production Operations and Well Management
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
      </View>
    </View>
  );
};

export default MyCoursesComp