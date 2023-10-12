import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";


const ListCategories = () => {
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
      <View className="mx-auto">
        <View className=" w-[337px] h-[230px] items-center  bg-[#F2F4F8] rounded-[20px]">
          <View className=" w-[312px] h-[156px] mt-[12px]">
            <Image
              source={require("../../../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <Text className="text-[20px] font-[700] font-[Plusregular] leading-[28px] my-3">
            Upstream Sector
          </Text>
        </View>
        <ScrollView className=" mt-4">
          <TouchableOpacity className=" w-[363px] h-[118px]  flex-row items-center">
            <View className=" w-[145px] h-[98.88px] mt-[12px] m-[10px]">
              <Image
                source={require("../../../../../assets/img/category.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 12,
                }}
              />
            </View>
            <View className="w-[188px] h-[98.88px]">
              <Text className="text-[12px] font-[700] font-[Plusregular] leading-[20px]">
                Reservoir Engineering Principles
              </Text>
              <Text className="text-[7px] font-[700] font-[Plusregular] text-[#242E21] leading-normal my-1">
                867+ Students
              </Text>
              <View className=" flex-row items-center my-2">
                <Text className="text-[10px] font-[700] font-[Plusregular] mr-2 leading-[18px]">
                  ₦2000.99
                </Text>
                <Text className="text-[9px] font-[400] font-[Plusregular] line-through decoration-double leading-[15px]">
                  ₦449.99
                </Text>
              </View>
              <View className=" flex-row items-center">
                <TouchableOpacity className=" w-[64px] h-[20px]  border border-[#CBCBCB] rounded-[5px] mr-2 items-center justify-center">
                  <Text className="text-[8px] font-[600] font-[Plusregular]   leading-[13px]">
                    Add to cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className=" w-[14px] h-[14px] border  border-[#CBCBCB] ">
                  <EvilIcons name="heart" size={14} color="#292D32" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default ListCategories