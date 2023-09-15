import React from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

type ButtonType = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  onPress?:()=> void
};

const CustomButton = ({
  title,
  disabled,
  primary,
  loading,
  onPress,
}: ButtonType) => {
  const getBgColor = () => {
    if (disabled) return "bg-slate-300";
    if (primary) return "bg-[#344054]";
   
  };

  const disabledTextBtn = disabled ? "text-black" : "text-white";

  return (
    <TouchableOpacity
      className={`px-2 h-12 border border-gray-300 rounded-md items-center mt-2 py-3 ${getBgColor()}`}
      disabled={disabled}
      onPress={onPress}
    >
      <View className="flex-row">
        {title && (
          <Text className={`${disabledTextBtn} font-[PlusMedium]`}>
            {loading ? <ActivityIndicator />: title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
