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

  const ref = React.useRef(null);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    // console.log(contentOffsetX, "contentOffsetX");
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    // console.log(currentIndex, "currentIndex");
  };
  const onSkip = () => {
    const lastSlideIndex = slider.length - 1;
    const offSet = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offSet });
    setCurrentSlideIndex(lastSlideIndex);
   
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
              className=" items-center justify-center rounded-md bg-[#AF5E41] px-[38px] py-[16px]  mr-10"
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
      <ImageBackground
        source={require("../../../assets/images/bg_img.png")}
        className="w-full h-full"
        // style={{width:"100%", height: "100%"}}
      >
        <View className=" flex-row items-center mx-auto">
          <View className=" w-[54px] h-[40px] ">
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <Text className="text-[16px] font-[700] leading-[30px] font-[Plusregular] tracking-[3px] uppercase text-[#AFBCCB] my-10">
            Well Professionals
          </Text>
        </View>
        <View className="">
          <FlatList
          ref={ref}
            data={slider}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={updateCurrentSlideIndex}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ height: height * 0.75 }}
            renderItem={({ item }) => (
              <View className={` items-center mt-10 `}>
                <View className={``}>
                  <Text
                    className={`text-white text-5xl font-extrabold font-[InterRegular] leading-10  w-80 `}
                  >
                    {item.title}
                  </Text>
                  <Text className=" w-80 text-xs leading-4 text-white mb-5">
                    {item.text}
                  </Text>
                  <Image
                    source={item.img}
                    style={{
                      width,
                      height: 275,
                      resizeMode: "contain",
                      marginTop: 20,
                      // borderRadius: 10,
                      // borderTopRightRadius: 5,
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default OnboardinComp;
