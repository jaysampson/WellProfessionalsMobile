import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TypeSlider } from "../../../types/authTypes";

const { width, height } = Dimensions.get("window");

const OnboardinComp: React.FC<{ slider: TypeSlider[] }> = ({ slider }) => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef<number | any>(null);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    // console.log(currentIndex, "currentIndex");
  };
  const onSkip = () => {
    const lastSlideIndex = slider.length - 1;
    const offSet = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offSet });
    setCurrentSlideIndex(lastSlideIndex);
    // console.log(lastSlideIndex, "lastSlideIndex");
    // console.log(ref.current, "scrollToOffset");
  };

  const Footer = () => {
    return (
      <View className="flex-row items-center justify-between mb-10">
        <View className=" justify-between px-8">
          <View className="flex-row justify-center mt-1">
            {slider.map((_, index) => (
              <View
                key={index}
                className={`h-1 w-1 mx-1 rounded-md bg-primary-100 ${
                  currentSlideIndex == index && "bg-primary-100 w-5"
                }`}
              />
            ))}
          </View>
        </View>
        <View className="">
          {currentSlideIndex == slider.length - 1 ? (
            <TouchableOpacity
              className="w-40 h-12 bg-primary-100 items-center justify-center rounded-md  mr-10"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text className="text-white font-[PlusMedium] font-thin">
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="mr-10"
              onPress={() => {
                onSkip();
              }}
            >
              <Text className="text-orange-20 font-[PlusMedium] font-thin">
                Skip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-dark-blue">
      <View>
        <ImageBackground
          source={require("../../../assets/images/bg_img.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View className="px-3">
            <Image
              source={require("../../../assets/images/logo_1.png")}
              style={{
                width: 297,
                height: 40,
                marginHorizontal: 39,
                marginVertical: 50,
              }}
            />
          </View>
          <FlatList
            ref={ref}
            data={slider}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: height * 75 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <View className="">
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{ height: 350, width }}
                  />
                  <Text className=" w-96 text-white text-5xl  font-[PlusExtraBold] px-5">
                    {item.title}
                  </Text>
                  <View>
                    <Text className="w-96 p-3 text-xs text-zinc-500 font-[Plusregular]">
                      {item.text}
                    </Text>
                  </View>
                </View>
              </>
            )}
          />
          <Footer />
        </ImageBackground>
      </View>
    </View>
  );
};

export default OnboardinComp;
