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
import Footer from "./Footer";
import SliderRenderItem from "./SliderRenderItem";

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

  return (
    <View className="flex-1 bg-dark-blue pt-20">
      <View>
        <ImageBackground
          source={require("../../../assets/images/bg_img.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View className=" w-72 h-10 self-center mb-16 ">
            <Image
              source={require("../../../assets/images/logo_1.png")}
              style={{
                width: "100%",
                height: "100%",
               
              }}
            />
          </View>
          <FlatList
            ref={ref}
            data={slider}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={updateCurrentSlideIndex}
            // contentContainerStyle={{ height: height * 75 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <SliderRenderItem item={item} />}
          />
          <Footer
            slider={slider}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            onSkip={onSkip}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default OnboardinComp;
