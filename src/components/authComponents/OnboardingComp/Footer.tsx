import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TypeSlider } from '../../../types/authTypes';

type Props ={
    slider: TypeSlider[];
    currentSlideIndex: number;
    setCurrentSlideIndex: (currentSlideIndex: number) => void;
     onSkip:()=> void;
}

const Footer = ({slider, currentSlideIndex, onSkip, setCurrentSlideIndex}: Props) => {
    const navigation =  useNavigation()
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
              className="  mr-10"
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
                // onSkip();
                navigation.navigate("Register");
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

export default Footer