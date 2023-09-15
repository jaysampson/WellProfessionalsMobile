import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const Lessions = ({ item, selectLesson }) => {
  console.log(item, "item")
  const dataOne = [
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Introduction",
      time: "16 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Placerat vestibulum",
      time: "16 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Placerat vestibulum",
      time: "20 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Placerat vestibulum",
      time: "34 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Placerat vestibulum",
      time: "34 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
    {
      icon: <EvilIcons name="lock" size={24} color="black" />,
      title: "Placerat vestibulum",
      time: "34 mins",
      arrorRight: (
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      ),
    },
  ];
  return (
    <View>
      <Text className="font-[PlusBold] text-[18px] mb-4">{item?.lessons?.length} Lessons</Text>
      <View>
        {item?.lessons?.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-between bg-white p-4 rounded-lg my-1"
            onPress={() => {
              selectLesson(item._id);
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
                  {item.time}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <EvilIcons name="lock" size={24} color="black" />
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Lessions