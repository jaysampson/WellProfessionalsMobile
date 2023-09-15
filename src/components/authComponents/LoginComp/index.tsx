import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '../../customComponents/CustomInput';
import CustomButton from '../../customComponents/customButton';
import Checkbox from "expo-checkbox";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { GoogleIcon } from '../../../helper/Icon';

type LoginType = {
  onchangeText: (name: string, value: string) => void;
  form: object;
  isChecked: boolean;
  setChecked: (value: boolean) => void;
  isSecureEntry: boolean;
  setIsSecureEntry: () => void;
  onSubmit:()=>void
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
        <Text className="text-lg font-[PlusSemiBold]">Log in</Text>
        <View />
      </View>
      <View className="py-8">
        <View className="mb-10">
          <Text className="text-2xl font-[PlusBold]">Welcome back,</Text>
          <Text className="text-[#6C7072] text-xs font-[Plusregular]">
            Good to see you again.
          </Text>
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
                <FontAwesome5 name="eye-slash" size={24} color="black" />
              ) : (
                <FontAwesome5 name="eye" size={24} color="black" />
              )}
              </TouchableOpacity>
          }
          iconPostion="right"
          // style={styles.input}
        />
        <View className="flex-row items-center justify-between">
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

        <View className="pt-10  mb-20">
          <View className="flex-row items-center mx-auto">
            <View className="h-0.5 w-20 bg-slate-400" />
            <Text className="mx-3">OR</Text>
            <View className="h-0.5 w-20 bg-slate-400" />
          </View>
          <View className="mt-2">
            <TouchableOpacity className=" flex-row w-full h-11 border border-gray-300  items-center justify-center rounded-lg my-3">
              {/* <FontAwesome5 name="google" size={24} color="#34A853" /> */}
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

        <CustomButton
          primary
          title="Login"
          loading={isLoading}
          disabled={isLoading}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default LoginComp