import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from 'react'
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import CustomInput from '../../customComponents/CustomInput'
import { useNavigation } from "@react-navigation/native";

type SearchProps = {
  searchQuery: string;
  handleSearch: (text: string) => void;
  data: any;
  isLoading: boolean;
  authUser: any;
  handlAddToCart:(item:any)=>void;
};

const SearchComp = ({
  searchQuery,
  handleSearch,
  data,
  isLoading,
  authUser,
  handlAddToCart,
}: SearchProps) => {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 bg-white p-5 py-16">
      <View className="  h-[44px] bg-[#ecd6ce] flex-row  items-center justify-between rounded-lg px-3">
        <View className=" w-[280px] flex-row items-center">
          <View>
            <EvilIcons name="search" size={24} color="#AF5E41" />
          </View>
          <TextInput
            placeholder="search"
            className=" flex-1"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <View>
          <Ionicons name="filter-outline" size={24} color="#AF5E41" />
        </View>
      </View>
      <View className="mt-5">
        {isLoading && <ActivityIndicator className="py-20" />}
        {!isLoading && (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity className=" h-[118px]  flex-row items-center ">
                <View className=" w-[145px] h-[98.88px] mt-[12px] m-[10px]">
                  <Image
                    source={{
                      uri:
                        item?.thumbnail?.url ||
                        "https://www.pngitem.com/pimgs/m/140-1403686_science-technology-and-engineering-courses-hd-png-download.png",
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 12,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View className=" h-[98.88px]">
                  <Text className="text-[12px] font-[700] font-[Plusregular] leading-[20px]">
                    {item?.name}
                  </Text>
                  <Text className="text-[7px] font-[700] font-[Plusregular] text-[#242E21] leading-normal my-1">
                    {item?.purchased} Students
                  </Text>
                  <View className=" flex-row items-center my-2">
                    <Text className="text-[10px] font-[700] font-[Plusregular] mr-2 leading-[18px]">
                      ₦{item?.price}
                    </Text>
                    <Text className="text-[9px] font-[400] font-[Plusregular] line-through decoration-double leading-[15px]">
                      ₦449.99
                    </Text>
                  </View>
                  <View className=" flex-row items-center">
                    <TouchableOpacity
                      className=" w-[64px] h-[20px]  border border-[#CBCBCB] rounded-[5px] mr-2 items-center justify-center"
                      onPress={() => {
                        authUser?.data?.courses.find((d) => d._id === item._id)
                          ? navigation.navigate("MyCoursesScreen", { item })
                          : handlAddToCart(item);
                      }}
                    >
                      <Text className="text-[8px] font-[600] font-[Plusregular]   leading-[13px]">
                        {authUser?.data?.courses.find((d) => d._id === item._id)
                          ? "Go to course"
                          : " Add to cart"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SearchComp