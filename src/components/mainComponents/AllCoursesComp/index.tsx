import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AllCoursesComp = ({ trendingData }) => {
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
          All Courses
        </Text>
        <View />
      </View>
      <View className="pt-5">
        {/* <Text className="font-[PlusBold] text-[18px]">Midstream</Text> */}

        <FlatList
          data={trendingData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          //   keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View className="w-[161px] h-[260] mx-3 mt-4">
              <View className="w-[161px] h-[260px]">
                <View className="h-[102px]">
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
                <View className="flex-row items-center mt-1">
                  <Text className="font-[PlusSemiBold] text-[11px] mr-3 text-[#CD760F]">
                    Lorem ipsum
                  </Text>
                  <Ionicons name="checkmark-circle" size={11} color="black" />
                </View>
                <View>
                  <Text className="font-[PlusBold] text-[11px]">
                    Reservoir Engineering Principles
                  </Text>
                  <View className="flex-row mt-2">
                    <Text className="text-[8px]">Icons</Text>
                    <Text className="font[PlusSemiBold] text-[8px] mx-2">
                      888 Student
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center my-2 ">
                  <Text className="font-[PlusBold] text-[13px]">N260.00</Text>
                  <Text className="mx-2 line-through decoration-double font-[#Plusregular] text-[11px] text-[#545454]">
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
          )}
        />

        {/* <View className="w-[161px] h-[260px] bg-red-500"></View> */}
      </View>
    </View>
  );
};

export default AllCoursesComp;
