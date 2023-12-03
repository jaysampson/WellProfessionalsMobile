import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";

type AllCoursesCompType = {
  data: object;
  error: object;
  isLoading: boolean;
  isError: boolean;
  handlAddToCart: (item: object) => void;
  authUser: object;
  getAllUsers: object;
  getAUserInfo:object;
  handleOnClick: (item: object) => void;
};

const AllCoursesComp = ({
  data,
  error,
  isLoading,
  isError,
  handlAddToCart,
  authUser,
  handleOnClick,
  getAllUsers,
  getAUserInfo,
}: AllCoursesCompType) => {
  const navigation = useNavigation();

  console.log(authUser, "data");

  return (
    <>
      <Spinner
        visible={isLoading}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className="flex-1 bg-white p-5">
        <View className="flex-row justify-between mt-10">
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
            data={data.getCourse}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            // keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="  m-2"
                onPress={() => {
                  handleOnClick(item);
                }}
              >
                <View className="w-44 h-64">
                  <View className="h-[102px]">
                    <Image
                      source={{ uri: item?.thumbnail?.url || 'https://www.pngitem.com/pimgs/m/140-1403686_science-technology-and-engineering-courses-hd-png-download.png' }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                        resizeMode: "contain",

                        // borderTopRightRadius: 5,
                      }}
                    />
                  </View>
                  <View className="flex-row items-center mt-1">
                    <Text className="font-[PlusSemiBold] text-[11px] mr-3 text-[#CD760F]">
                      {
                        getAllUsers?.data?.usersData?.find(
                          (d) => d.id === item.id
                        )?.name
                      }
                    </Text>
                    <Ionicons name="checkmark-circle" size={11} color="black" />
                  </View>
                  <View>
                    <Text className="font-[PlusBold] text-[11px]">
                      {item.name}
                    </Text>
                    <View className="flex-row mt-1">
                      {/* <Text className="text-[8px]">Icons</Text> */}
                      <Text className="font[PlusSemiBold] text-[8px]">
                        {item.purchased} Students
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center my-2 ">
                    <Text className="font-[PlusBold] text-[13px]">
                      N{item.price}
                    </Text>
                    <Text className="mx-2 line-through decoration-double font-[#Plusregular] text-[11px] text-[#545454]">
                      N450.00
                    </Text>
                  </View>
                  <TouchableOpacity
                    className=" w-32 h-8  px-3 py-1 border justify-center items-center rounded-lg"
                    onPress={() => {
                      authUser?.data?.courses.find((d) => d._id === item._id)
                        ? navigation.navigate("MyCoursesScreen", { item })
                        : handlAddToCart(item);
                    }}
                  >
                    <Text className="font-[PlusSemiBold] text-xs text-[#545454]">
                      {authUser?.data?.courses.find((d) => d._id === item._id)
                        ? "Go to course"
                        : " Add to cart"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* <View className="w-[161px] h-[260px] bg-red-500"></View> */}
        </View>
      </View>
    </>
  );
};

export default AllCoursesComp;
