import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ProfileIcon } from "../../../helper/Icon";
import { generalTypeData } from "../../../screens/mainScreens/ProfileScreen";


const ProfileScreenComp = ({
  generalData,
  myClasses,
  more,
  handleLogout,
  isLoading,
  isError,
  error,
  data,
}) => {
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
        <View />

        <TouchableOpacity>
          <Ionicons name="md-settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="items-center mt-2">
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
        {isLoading && (
          <Text className="font-[PlusSemiBold] mt-2 text-[18px] leading-6">
            Loading...
          </Text>
        )}
        {!isLoading && !isError && (
          <Text className="font-[PlusSemiBold] mt-2 text-[18px] leading-6">
            {data?.others?.name}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ViewProfileScreen");
          }}
        >
          <Text className="text-[12px] font-[PlusMedium] text-[#CD760F]">
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View className="">
        <View>
          <Text className="font-[PlusBold] text-[12px] text-gray-400">
            General
          </Text>

          {generalData.map((item) => (
            <View className="flex-row items-center justify-between mt-3 p-1">
              <View className="flex-row items-center" key={item.name}>
                {item.icon}
                <Text className="font-[Plusregular] text-[16px]">
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity>{item.arrorIcon}</TouchableOpacity>
            </View>
          ))}
        </View>

        {/* MY CLASSES */}
        <View className="my-4">
          <Text className="font-[PlusBold] text-[12px] text-gray-400">
            My Classes
          </Text>

          {myClasses.map((item) => (
            <View className="flex-row items-center justify-between mt-3 p-1">
              <View className="flex-row items-center" key={item.name}>
                {item.icon}
                <Text className="font-[Plusregular] text-[16px]">
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity>{item.arrorIcon}</TouchableOpacity>
            </View>
          ))}
        </View>
        {/* END */}
        {/* MORE */}
        <View className="">
          <Text className="font-[PlusBold] text-[12px] text-gray-400">
            More
          </Text>
          {more.map((item) => (
            <View className="flex-row items-center justify-between mt-3 p-1">
              <View className="flex-row items-center" key={item.name}>
                {item.icon}
                <Text className="font-[Plusregular] text-[16px]">
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity>{item.arrorIcon}</TouchableOpacity>
            </View>
          ))}
        </View>
        {/* END */}
      </View>
      <TouchableOpacity
        className="items-center py-6"
        onPress={() => {
          handleLogout();
        }}
      >
        <Text className="text-[#DE1A1A] text-[16px] font-[Plusregular]">
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreenComp;
