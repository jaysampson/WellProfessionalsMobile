import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Details from "./lessonsCatComp/Details";

const MylessonsComp = ({
  lessonCategories,
  categoriesIndex,
  setCategoriesIndex,
}) => {
  const navigation = useNavigation();
    const selectedText =
      "bg-[#E5E9EB] text-[#252C32] text-[14px] font-[600] font-[Plusregular] leading-[24px] tracking-[-0.084px]";
  return (
    <View className="flex-1 bg-white">
      <View className="h-72 w-full bg-red-500 relative">
        <WebView
          // style={styles.container}
          source={{
            uri: `https://drive.google.com/file/d/10WeD4_ehxz-P_0RLxRLthrhQ0_cZREHP/preview`,
          }}
        />
        <View className="flex-row px-5 w-full  justify-between items-center  absolute top-11">
          <TouchableOpacity
            className=""
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <View />
          <TouchableOpacity>
            <Ionicons name="md-settings-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="p-5">
        <View>
          <Text className=" text-xl font-bold leading-7 font-[Plusregular]">
            Pipeline Corrosion Control and Prevention
          </Text>
          <Text className="text-[#AF5E41] font-[Plusregular] text-xs font-medium leading-5 my-1">
            By David Udoh{" "}
          </Text>
        </View>
        <View className="flex-row justify-around  bg-[#FDFDFE] my-4  rounded-md ">
          {lessonCategories.map((item, index: number) => (
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
        {categoriesIndex == 0 && <Details />}
      </ScrollView>
    </View>
  );
};

export default MylessonsComp;
