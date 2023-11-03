import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomInput from "../../customComponents/CustomInput";
import CustomButton from "../../customComponents/customButton";
import Checkbox from "expo-checkbox";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
// import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GoogleIcon } from "../../../helper/Icon";

type LoginType = {
  onchangeText: (name: string, value: string) => void;
  form: object;
  isChecked: boolean;
  setChecked: (value: boolean) => void;
  isSecureEntry: boolean;
  setIsSecureEntry: (prev:boolean) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

const LoginComp = ({
  onchangeText,
  isChecked,
  setChecked,
  onSubmit,
  isSecureEntry,
  setIsSecureEntry,
  form,
  isLoading,
}: LoginType) => {
  const navigation = useNavigation();
  return (
    <>
      <Spinner
        visible={isLoading}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className=" flex-1 bg-white">
        <View className="p-5">
          <View className="h-28  my-11 items-center">
            <View className=" w-20 h-16 p-px">
              <Image
                source={require("../../../assets/images/logo_2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                  //   borderRadius: 100,
                }}
              />
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold leading-8">
                Welcome back,
              </Text>
              <Text className="leading-4 font-normal text-xs text-[#6C7072]">
                Good to see you again!
              </Text>
            </View>
          </View>

          <CustomInput
            label="Email Address"
            // value={value}
            onChangeText={(value) => {
              onchangeText("email", value);
            }}
            placeholder={"Input your email adddres"}
            // style={styles.input}
            // error={"This Feild is require"}
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
                  <FontAwesome5 name="eye-slash" size={24} color="#6C7072" />
                ) : (
                  <FontAwesome5 name="eye" size={24} color="#6C7072" />
                )}
              </TouchableOpacity>
            }
            iconPostion="right"
            // style={styles.input}
          />
          <View className="flex-row items-center justify-between my-5">
            <View className="flex-row">
              <Checkbox
                className="border"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#CD760F" : "#CD760F"}
              />
              <Text className="mx-2 text-[#CD760F] text-sm  font-[PlusMedium]">
                Remember me
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text className="text-[#CD760F] text-sm font-[PlusMedium]">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            primary
            title="Login"
            loading={isLoading}
            disabled={isLoading}
            onPress={onSubmit}
          />

          <View className="pt-10 ">
            <View className="flex-row items-center mx-auto">
              <View className="h-0.5 w-20 bg-slate-400" />
              <Text className="mx-3">OR</Text>
              <View className="h-0.5 w-20 bg-slate-400" />
            </View>
            <View className="mt-2">
              <TouchableOpacity className=" flex-row w-full h-11 border border-gray-300  items-center justify-center rounded-lg my-3">
                <GoogleIcon />

                <Text className="mx-3 text-base text-[#344054] font-[Plusregular]">
                  Sign in with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row w-full h-11 border  border-gray-300 items-center justify-center rounded-lg bg-[#1877F2]">
                <FontAwesome5 name="facebook" size={24} color="#fff" />
                <Text className="mx-3 text-base text-white font-[Plusregular]">
                  Sign in with Facebook
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-center font-[Plusregular] py-7">
            Already have an Account?
            <Text
              className="text-[#CD760F]"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Sign Up Now
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginComp;
