import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../customComponents/customButton";
import CourseCart from "./CourseCart";

const CartComp = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const [showCourseCart, setShowCourseCart] = React.useState(true);

  return (
    <View className=" py-10 px-6 my-5 ">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[18px] text-[#090A0A] font-[InterRegular]">
          Cart
        </Text>
        <View />
        {/* <TouchableOpacity>
          <Ionicons name="md-settings-outline" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
      {showCourseCart ? (
        <View>
          <Text className="font-[PlusBold] text-[32px] leading-[36px] my-8">
            Shopping cart
          </Text>
          {show ? (
            <View className="mb-10">
              <Text className="font-[PlusSemiBold] text-[19px] leading-[28px] my-5 ">
                0 Items in Cart
              </Text>
              <View className="w-[350px] h-[322px]  border-[#757575] m-auto bg-[#E7E7E7]">
                <View className="items-center justify-items-center my-28">
                  <Text className="font[PlusSemiBold] text-[15px] text-[#545454]">
                    Your cart is empty
                  </Text>

                  <Text className="text-[#757575] font-[Plusregular] text-[11px] text-center leading-[20px]">
                    Looks like you haven’t added anything yet. Explore Courses
                    now and start learning on the go.
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View className="flex-row">
              <View className="w-[39px] h-[39px]">
                <Image
                  source={require("../../../assets/img/top_rate_3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 10,
                  }}
                />
              </View>
              <View className="mx-2">
                <Text className="font-[Plusregular] text-[10px]">
                  Lorem ipsum dolor sit amet, consectetur
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-[10px]">N50,000</Text>
                  <TouchableOpacity className="ml-6">
                    <Text className="text-[10px] text-[#DC851E]">Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row items-center ml-10 ">
                <TouchableOpacity>
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
                <Text>0</Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View className="my-10">
            <View className="h-px w-[335px] bg-[#E3E5E5]" />
            <Text className="font-[Plusregular] text-[16px] text-[#DC851E] my-5">
              Have a gift code?
            </Text>
            <View className="h-px w-[335px] bg-[#E3E5E5]" />
            <View className="flex-row justify-between my-5">
              <Text className="font-[Plusregular] text-[16px]">Sub Total</Text>
              <Text>0.00</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font[PlusBold] text-[18px]">Total</Text>
              <Text>0.00</Text>
            </View>
          </View>

          {show ? (
            <CustomButton
              primary
              title="Browse Courses"
              onPress={() => {
                navigation.navigate("AllCoursesScreen");
              }}
            />
          ) : (
            <CustomButton primary title="Proceed to pay" onPress={() => {}} />
          )}
        </View>
      ) : (
        <CourseCart />
      )}
    </View>
  );
};

export default CartComp;
