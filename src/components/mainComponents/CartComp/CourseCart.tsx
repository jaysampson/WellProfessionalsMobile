import { View, Text, Image } from "react-native";
import React from 'react'
import CustomButton from "../../customComponents/customButton";

const CourseCart = () => {
  return (
    <View>
      <View className="items-center">
        <View className="w-[343] h-[202] bg-red-500 rounded-lg  mx-auto mt-8">
          <Image
            source={require("../../../assets/images/review_img.png")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              // borderTopRightRadius: 5,
            }}
          />
        </View>
        <View className="items-center mt-5">
          <Text className="font-[PlusSemiBold] text-[18px] leading-[24px] text-center">
            Introduction to Petroleum Exploration and Production
          </Text>
          <Text className="font-[PlusMedium] text-[12px] mt-3">
            created by
            <Text className="text-[#AF5E41]"> David Udoh</Text>
          </Text>
        </View>
        <View className="my-6">
          <Text className="font-[PlusBold] text-[18px] mx-20">N24,000.00</Text>
        </View>
      </View>
      <View className="h-px w-[335px] bg-[#E3E5E5]" />
      <Text className="font-[Plusregular] text-[16px] text-[#DC851E] my-5">
        Have a gift code?
      </Text>
      <View className="h-px w-[335px] bg-[#E3E5E5]" />
      <View className="my-10">
        <View className="flex-row justify-between">
          <Text className="font-[Plusregular] text-[16px]">Sub Total</Text>
          <Text>0.00</Text>
        </View>
        <View className="flex-row justify-between mb-10">
          <Text className="font[PlusBold] text-[18px]">Total</Text>
          <Text>0.00</Text>
        </View>
        <CustomButton primary title="Proceed to pay" onPress={() => {}} />
      </View>
    </View>
  );
}

export default CourseCart