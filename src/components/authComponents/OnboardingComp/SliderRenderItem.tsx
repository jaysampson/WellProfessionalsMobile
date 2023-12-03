import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";

const SliderRenderItem = ({ item }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  //    console.log(SCREEN_WIDTH * 0.9);
  return (
    <>
      <View style={{ flex: 1, width: SCREEN_WIDTH }}>
        <Text className=" ml-5 font-extrabold text-5xl font-[Plusregular] w-80 text-white">
          {item.title}
        </Text>
        <View>
          <Text className=" ml-5 text-sm font-normal font-[Plusregular] w-80 text-[#FFFFFFB2]">
            {item.text}
          </Text>
        </View>
        <View className=" w-[217] h-[271] self-center mt-11">
          <Image
            source={item.img}
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>
    </>
  );
};

export default SliderRenderItem;
