import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from 'react'
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import CustomInput from '../../customComponents/CustomInput'

const SearchComp = () => {
  return (
    <View className=" flex-1 bg-white p-5 py-16">
      <View className="  h-[44px] bg-[#ecd6ce] flex-row  items-center justify-between rounded-lg px-3">
        <View className=" w-[280px] flex-row items-center">
          <View>
            <EvilIcons name="search" size={24} color="#AF5E41" />
          </View>
          <TextInput placeholder="search" className=" flex-1" />
        </View>
        <View>
          <Ionicons name="filter-outline" size={24} color="#AF5E41" />
        </View>
      </View>
      <ScrollView className="mt-5">
        <TouchableOpacity className=" h-[118px]  flex-row items-center ">
          <View className=" w-[145px] h-[98.88px] mt-[12px] m-[10px]">
            <Image
              source={require("../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <View className=" h-[98.88px]">
            <Text className="text-[12px] font-[700] font-[Plusregular] leading-[20px]">
              Reservoir Engineering Principles
            </Text>
            <Text className="text-[7px] font-[700] font-[Plusregular] text-[#242E21] leading-normal my-1">
              867+ Students
            </Text>
            <View className=" flex-row items-center my-2">
              <Text className="text-[10px] font-[700] font-[Plusregular] mr-2 leading-[18px]">
                ₦2000.99
              </Text>
              <Text className="text-[9px] font-[400] font-[Plusregular] line-through decoration-double leading-[15px]">
                ₦449.99
              </Text>
            </View>
            <View className=" flex-row items-center">
              <TouchableOpacity className=" w-[64px] h-[20px]  border border-[#CBCBCB] rounded-[5px] mr-2 items-center justify-center">
                <Text className="text-[8px] font-[600] font-[Plusregular]   leading-[13px]">
                  Add to cart
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity className=" w-[14px] h-[14px] border  border-[#CBCBCB] ">
                <EvilIcons name="heart" size={14} color="#292D32" />
              </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" h-[118px]  flex-row items-center ">
          <View className=" w-[145px] h-[98.88px] mt-[12px] m-[10px]">
            <Image
              source={require("../../../assets/img/category.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
            />
          </View>
          <View className=" h-[98.88px]">
            <Text className="text-[12px] font-[700] font-[Plusregular] leading-[20px]">
              Reservoir Engineering Principles
            </Text>
            <Text className="text-[7px] font-[700] font-[Plusregular] text-[#242E21] leading-normal my-1">
              867+ Students
            </Text>
            <View className=" flex-row items-center my-2">
              <Text className="text-[10px] font-[700] font-[Plusregular] mr-2 leading-[18px]">
                ₦2000.99
              </Text>
              <Text className="text-[9px] font-[400] font-[Plusregular] line-through decoration-double leading-[15px]">
                ₦449.99
              </Text>
            </View>
            <View className=" flex-row items-center">
              <TouchableOpacity className=" w-[64px] h-[20px]  border border-[#CBCBCB] rounded-[5px] mr-2 items-center justify-center">
                <Text className="text-[8px] font-[600] font-[Plusregular]   leading-[13px]">
                  Add to cart
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity className=" w-[14px] h-[14px] border  border-[#CBCBCB] ">
                <EvilIcons name="heart" size={14} color="#292D32" />
              </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default SearchComp