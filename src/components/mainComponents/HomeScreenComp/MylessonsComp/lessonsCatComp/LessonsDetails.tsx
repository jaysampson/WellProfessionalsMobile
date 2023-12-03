import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { Ionicons, MaterialIcons, EvilIcons } from "@expo/vector-icons";

const LessonsDetails = ({ data, selectLessonData }) => {
  return (
    <View>
      <Text className="font-[Plusregular] text-lg  leading-normal">
        Lesson details
      </Text>
      {data.lessonData.map((item: object, index: number) => (
        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 shadow shadow-black/30 rounded-lg my-1"
          key={item._id}
          onPress={() => {
            //   selectLesson(item._id);
            selectLessonData(item);
          }}
        >
          <View className="flex-row items-center">
            <View className="w-[30px] h-[30px] bg-[#E5E9EB] items-center justify-center rounded-full mr-2">
              <Text>{index + 1}</Text>
            </View>
            <View>
              <Text className="font-[PlusMedium] text-[13px]">
                {item.title}
              </Text>
              <Text className="font-[PlusMedium] text-[10px] text-[#CCCCCC]">
                {item.videoLength} mins
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <View className=" flex-row items-center bg-rose-400">
              <Progress.Pie
                progress={0.3}
                // width={100}
                // size={70}
                // thickness={10}
                // indeterminate={true}
                color="red"
                // strokeCap="round"
                // fill="red"
                // height={3}
              />
              <Text className=" mx-2 text-[#344054] text-[7px] font-[500] font-[Plusregular] leading-[11px]">
                30%
              </Text>
            </View>
            {/* <EvilIcons name="lock" size={24} color="black" /> */}
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LessonsDetails;
