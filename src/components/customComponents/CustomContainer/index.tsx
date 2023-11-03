import { View, Text, ScrollView } from "react-native";
import React, { Children } from "react";

type ContianerType = {
  children: React.ReactNode;
  style?: StyleSheet;
};

const Container = ({ children, style }: ContianerType) => {
  return (
    <ScrollView>
      <View className=" p-5">{children}</View>
    </ScrollView>
  );
};

export default Container;
