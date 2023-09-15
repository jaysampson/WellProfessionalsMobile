import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import CustomInput from "../../../components/customComponents/CustomInput";
import CustomButton from "../../../components/customComponents/customButton";

const CourseReviewScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating] = React.useState(0);

  return (
    <ScrollView className=" flex-1 bg-white py-10 px-6 my-5 ">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text>Reviews</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="md-settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <View className="w-[343] h-[202] bg-red-500 rounded-lg  mx-auto mt-8">
          <Image
            source={require("../../../assets/images/review_img.png")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              // borderTopRightRadius: 5,
            }}
          />
        </View>
        <View className="items-center mt-5">
          <Text className="font-[PlusBold] text-[20px]">
            Lorem ipsum dolor sit.
          </Text>
          <Text className="font-[PlusMedium] text-[12px] mt-3">
            created by
            <Text className="text-[#AF5E41]"> David Udoh</Text>
          </Text>
        </View>
        <View className="my-10">
          <Text className="font-[PlusBold] text-[18px] mx-20">
            Rate this course
          </Text>
          <View className="mt-5">
            <StarRating
              starSize={30}
              rating={rating}
              color="#F8C51B"
              onChange={setRating}
              starStyle={{ width: 50 }}
            />
          </View>
        </View>
      </View>
      <View className="border h-[150px] my-5">
        <TextInput
          multiline={true}
          //   style={{ minHeight: 128 }}
          placeholder="Multiline"
          numberOfLines={5}
          //   className="flex-1 h-11 px-2 font-[Plusregular]"
        />
      </View>
      <View className="pb-20">
        <CustomButton primary title="Submit" />
      </View>
    </ScrollView>
  );
}

export default CourseReviewScreen