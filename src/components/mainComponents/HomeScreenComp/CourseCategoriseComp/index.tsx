import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";


const CourseCategoriesComp = () => {
    const navigation = useNavigation()
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
          Category
        </Text>
        <View />
      </View>
      <View className=" h-[92px] mx-auto items-center mt-6">
        <Text className="text-[35px] font-[700] font-[Plusregular] leading-[36px]">
          All Categories
        </Text>
        <Text className="text-[16px] font-[400] font-[Plusregular] leading-[24px]">
          consectetur adipiscing elit, sed do
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity className=" w-[337px] h-[296px] items-center  bg-[#F2F4F8] rounded-[20px]" 
        onPress={()=>{
            navigation.navigate("ListCategories")
        }}>
          <View className=" w-[312px] h-[156px] mt-[12px] ">
            <Image
              source={require("../../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <View className="w-[312px] h-[91px] ">
            <Text className="text-[20px] font-[700] font-[Plusregular] leading-[28px]">
              Upstream Sector
            </Text>
            <Text className="text-[11px] font-[400] font-[Plusregular] leading-[20px] w-[284px] text-ellipsis overflow-hidden text-[#999FAA]">
              These courses cover essential topics in the upstream sector,
              providing a solid foundation of knowledge and skills necessary for
              professionals working in exploration,
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" w-[337px] h-[296px] items-center  bg-[#F2F4F8] rounded-[20px] my-6">
          <View className=" w-[312px] h-[156px] mt-[12px] ">
            <Image
              source={require("../../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <View className="w-[312px] h-[91px] ">
            <Text className="text-[20px] font-[700] font-[Plusregular] leading-[28px]">
              Midstream Sector
            </Text>
            <Text className="text-[11px] font-[400] font-[Plusregular] leading-[20px] w-[284px] text-ellipsis overflow-hidden text-[#999FAA]">
              These courses cover essential topics in the upstream sector,
              providing a solid foundation of knowledge and skills necessary for
              professionals working in exploration,
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" w-[337px] h-[296px] items-center  bg-[#F2F4F8] rounded-[20px]">
          <View className=" w-[312px] h-[156px] mt-[12px] ">
            <Image
              source={require("../../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <View className="w-[312px] h-[91px] ">
            <Text className="text-[20px] font-[700] font-[Plusregular] leading-[28px]">
              Downstream Sector
            </Text>
            <Text className="text-[11px] font-[400] font-[Plusregular] leading-[20px] w-[284px] text-ellipsis overflow-hidden text-[#999FAA]">
              These courses cover essential topics in the upstream sector,
              providing a solid foundation of knowledge and skills necessary for
              professionals working in exploration,
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default CourseCategoriesComp