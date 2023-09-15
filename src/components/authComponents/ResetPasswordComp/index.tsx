import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import React from 'react'
import CustomInput from "../../customComponents/CustomInput";
import CustomButton from "../../customComponents/customButton";

const ResetPasswordComp = () => {
  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between">
        <TouchableOpacity className="w-25 h-6 border border-gray-300">
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg text-[#090A0A]">Reset Password</Text>
        <View />
      </View>
      <View className="py-16">
        <CustomInput label="Email address" />
        <CustomInput label="Create new password" />
        <CustomInput label="Confirm password" />
        <View className="py-10">
          <CustomButton primary title="submit" />
        </View>
      </View>
    </View>
  );
}

export default ResetPasswordComp