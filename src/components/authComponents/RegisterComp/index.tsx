import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CustomInput from "../../customComponents/CustomInput";
import CustomButton from "../../customComponents/customButton";
import CountryPicker from "react-native-country-picker-modal";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RegisterType } from "../../../types/authTypes";
import { GoogleIcon } from "../../../helper/Icon";

const RegisterComp = ({
  onchangeText,
  onSubmit,
  form,
  setForm,
  isLoading,
  isSecureEntry,
  setIsSecureEntry,
}: RegisterType) => {
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
        <Text className="text-lg font-[PlusSemiBold]">Sign up</Text>
        <View />
      </View>
     
      <ScrollView className="py-5" showsVerticalScrollIndicator={false}>
        <CustomInput
          label="Name"
          // value={value}
          onChangeText={(value) => onchangeText("name", value)}
          placeholder={"Input your name"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
        <CustomInput
          label="Email"
          // value={value}
          onChangeText={(value) => {
            onchangeText("email", value);
          }}
          placeholder={"Input your email adddres"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
        <CustomInput
          label="Phone number"
          placeholder={"Input your Phone number"}
          keyboardType={"numeric"}
          icon={
            <CountryPicker
              //  countryCode
              withFilter
              withFlag
              countryCode={form.cCountryCode || "AF"}
              withCountryNameButton={false}
              withCallingCodeButton
              withCallingCode
              withEmoji
              onSelect={(v) => {
                const cCallingCode = v.callingCode[0];
                const cCountryCode = v.cca2;
                setForm({ ...form, country_Code: cCallingCode, cCountryCode });

                console.log(v, "v");
              }}
            />
          }
          onChangeText={(value) => {
            onchangeText("phoneNumber", value);
          }}
          iconPostion="left"
        />
        <CustomInput
          label="Create password"
          // value={value2}
          secureTextEntry={isSecureEntry}
          onChangeText={(value) => {
            onchangeText("password", value);
          }}
          placeholder={"Create your password"}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

              {isSecureEntry ? (
                <FontAwesome5 name="eye-slash" size={24} color="black" />
              ) : (
                <FontAwesome5 name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          }
          iconPostion="right"
          // style={styles.input}
        />

        <View className="pt-10 pb-5">
          <View className="flex-row items-center mx-auto">
            <View className="h-0.5 w-20 bg-slate-400" />
            <Text className="mx-3">OR</Text>
            <View className="h-0.5 w-20 bg-slate-400" />
          </View>
          <View className="flex-row items-center mx-auto mt-2">
            <TouchableOpacity className="w-24 h-11 border  border-gray-300 items-center justify-center rounded-md">
              {/* <FontAwesome5 name="google" size={24} color="#34A853" /> */}
              <GoogleIcon />
            </TouchableOpacity>
            <View className="mx-3" />
            <TouchableOpacity className="w-24 h-11  border  border-gray-300 items-center justify-center rounded-md bg-[#1877F2]">
              <FontAwesome5 name="facebook" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text className="pt-4 text-xs font-[Plusregular]">
            By continuing, you agree to our
            <Text
              onPress={() => {
                console.log("clicked");
              }}
              className="text-[#CD760F]"
            >
              {" "}
              Terms of Service{" "}
            </Text>{" "}
            and
            <Text className="text-[#CD760F]"> Privacy Policy.</Text>
          </Text>
        </View>

        <CustomButton
          primary
          title="Register"
          loading={isLoading}
          disabled={isLoading}
          onPress={() => {
            onSubmit();
          }}
        />
        <Text className="text-center font-[Plusregular] pb-10">
          Have an Account?{" "}
          <Text
            className="text-[#CD760F]"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login{" "}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default RegisterComp;
