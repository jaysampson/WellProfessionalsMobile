import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const TopRatedComp = () => {
  const navigation = useNavigation();
  return (
    <View className="py-10 px-6 my-5">
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
          Top Rated
        </Text>
        <View />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-[295px] h-[286px] mx-auto mt-8 mb-10">
          <View className="w-[295px] h-[176px]">
            <Image
              source={require("../../../assets/img/top_rate_3.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                // borderTopRightRadius: 5,
              }}
            />
          </View>
          <View>
            <Text className="font-[PlusBold] text-[14px]">
              Introduction to Petroleum Exploration and Production
            </Text>
            <View className="flex-row items-center mt-1">
              <View className="h-4 w-4">
                <Image
                  source={require("../../../assets/img/top_rate_3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    // borderTopRightRadius: 5,
                  }}
                />
              </View>
              <Text className="font-[PlusSemiBold] text-[9px] mx-2 text-[#CD760F]">
                Lorem ipsum
              </Text>
              <Ionicons name="checkmark-circle" size={11} color="black" />
            </View>
            <View className="flex-row items-center mt-1">
              <Text className="font-[PlusSemiBold] text-[9px] ml-2 text-[#CD760F]">
                Rating Stars
              </Text>
              <Text className="font-[InterRegular] text-[7px] mx-4 text-[#5B6871]">
                43 Ratings
              </Text>
            </View>
            <View className="flex-row items-center justify-between mx-2">
              <View className="flex-row items-center ">
                <Text className="font-[PlusBold] text-[15px]">N260.00</Text>
                <Text className="mx-3 line-through decoration-double font-[#Plusregular] text-[13] text-[#545454]">
                  N450.00
                </Text>
              </View>
              <TouchableOpacity className="w-[89] h-[28]  border justify-center items-center rounded-lg">
                <Text className="font-[PlusSemiBold] text-[12px] text-[#545454]">
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <View className="w-[295px] h-[286px] mx-auto mt-8 mb-10">
          <View className="w-[295px] h-[176px]">
            <Image
              source={require("../../../assets/img/top_rate_3.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                // borderTopRightRadius: 5,
              }}
            />
          </View>
          <View>
            <Text className="font-[PlusBold] text-[14px]">
              Introduction to Petroleum Exploration and Production
            </Text>
            <View className="flex-row items-center mt-1">
              <View className="h-4 w-4">
                <Image
                  source={require("../../../assets/img/top_rate_3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    // borderTopRightRadius: 5,
                  }}
                />
              </View>
              <Text className="font-[PlusSemiBold] text-[9px] mx-2 text-[#CD760F]">
                Lorem ipsum
              </Text>
              <Ionicons name="checkmark-circle" size={11} color="black" />
            </View>
            <View className="flex-row items-center mt-1">
              <Text className="font-[PlusSemiBold] text-[9px] ml-2 text-[#CD760F]">
                Rating Stars
              </Text>
              <Text className="font-[InterRegular] text-[7px] mx-4 text-[#5B6871]">
                43 Ratings
              </Text>
            </View>
            <View className="flex-row items-center justify-between mx-2">
              <View className="flex-row">
                <Text className="font-[PlusBold] text-[15px]">N260.00</Text>
                <Text className="mx-3 line-through decoration-solid font-[#Plusregular] text-[13] text-[#545454]">
                  N450.00
                </Text>
              </View>
              <TouchableOpacity className="w-[89] h-[28]  border justify-center items-center rounded-lg">
                <Text className="font-[PlusSemiBold] text-[12px] text-[#545454]">
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
}

export default TopRatedComp