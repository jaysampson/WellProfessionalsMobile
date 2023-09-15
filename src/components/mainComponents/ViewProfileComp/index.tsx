import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CountryPicker from "react-native-country-picker-modal";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../../customComponents/CustomInput";


const ViewProfileComp = ({ onchangeText, form, setForm }) => {
  const navigation = useNavigation();
  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        {/* <View /> */}
        <Text>Profile</Text>

        <TouchableOpacity>
          <Ionicons name="md-settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="items-center mt-14">
        <View className="w-[65] h-[65] bg-red-600 rounded-full">
          <Image
            source={require("../../../assets/img/top_rate_3.png")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
          />
        </View>
        <Text className="font-[PlusSemiBold] mt-2 text-[18px]">
          {/* {data.others.name} */}
          Lasun Oguns
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ViewProfileScreen");
          }}
        >
          <Text className="text-[12px] font-[PlusMedium] text-[#CD760F]">
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="py-5" showsVerticalScrollIndicator={false}>
        <CustomInput
          label="Full name"
          // value={value}
          onChangeText={(value) => onchangeText("name", value)}
          placeholder={"Input your name"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
        <CustomInput
          label="Email"
          // value={value}
          onChangeText={(value) => onchangeText("email", value)}
          placeholder={"Input your Email"}
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
          label="Location"
          // value={value}
          onChangeText={(value) => onchangeText("name", value)}
          placeholder={"Input your Location"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
      </ScrollView>
    </View>
  );
};

export default ViewProfileComp