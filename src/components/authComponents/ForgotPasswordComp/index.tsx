import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../../customComponents/CustomInput";
import CustomButton from "../../customComponents/customButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordComp = () => {
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
        <Text className="text-lg text-[#090A0A] font-[Plusregular]">
          Password reset
        </Text>
        <View />
      </View>
      <View className="w-80 h-44 my-10 mx-5">
        <Image
          source={require("../../../assets/images/password_reset.png")}
          className="w-16 h-16 m-auto"
        />
        <View className="m-auto">
          <Text className="text-[22px] font-bold m-auto font-[PlusBold]">
            Forgot your password?
          </Text>
          <Text className="text-[#6C7072] text-[12px] text-center font-[Plusregular]">
            Enter your registered email below to receive a password reset
            instruction.
          </Text>
        </View>
      </View>
      <View>
        <CustomInput
          label="Email address"
          placeholder="input your email"
          onChangeText={(value) => {
            onchangeText("Email", value);
          }}
        />
        <CustomButton
          primary
          title="Continue"
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
        />
      </View>
      <View className="pt-64 m-auto">
        <Text className="text-sm">
          You remember your password?{" "}
          <Text className="text-[#AF5E41]">Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default ForgotPasswordComp;
