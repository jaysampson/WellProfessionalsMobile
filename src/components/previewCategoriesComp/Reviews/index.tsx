import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";

const Reviews = ({ item, getAllUsers }) => {
  const navigation = useNavigation();
  const [rating, setRating] = React.useState(0);

  return (
    <View>
      <Text className="font-[PlusBold] text-[18px] mb-4">Comments</Text>
      <TouchableOpacity className="flex-row" onPress={()=>{
        navigation.navigate("CourseReviewScreen")
      }}>
        <View className="flex-1 w-[295px]h-[40px]  border border-[#D0D5DD]">
          <Text className="text-[#64748B] p-4">
            Write a comment here, be nice...
          </Text>
        </View>
        <View className="items-center justify-center ml-1 bg-[#AF5E41] p-4">
          <Text>Icon</Text>
        </View>
      </TouchableOpacity>
      <View className="mt-5">
        {item.ratings.map((item) => (
          <View className="h-[299px] bg-white">
            <View className="items-center m-5 flex-row">
              <View className="w-[40px] h-[40px] rounded-full">
                <Image
                  source={require("../../../assets/img/top_rate_3.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                  }}
                />
              </View>

              <View className="mt-3">
                <Text className="mx-3 font-[PlusSemiBold]">Pricillar</Text>
                <StarRatingDisplay
                  starSize={15}
                  rating={rating}
                  color="#F8C51B"
                  // onChange={setRating}
                  starStyle={{ width: 5 }}
                />
              </View>
            </View>
            <View className="mx-5 ">
              <Text className="font-[16px] font-[Plusregular]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel
              </Text>
              <View className="my-5">
                <Text className="font-[PlusSemiBold] font-[16px]">
                  Show more
                </Text>
              </View>
              <Text>23 may 2023</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;
