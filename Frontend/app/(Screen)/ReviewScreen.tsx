import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const ReviewScreen = () => {
  const [rating, setRating] = useState(3);

  return (
    <View className="flex-1 justify-center items-center bg-[#ffffff] px-6">
      <Image
        source={require("../../assets/images/review.png")}
        resizeMode="cover"
        className="w-auto mb-4"
      />

      <Text className="text-left w-full mb-2 text-sm font-medium">Rating</Text>
      <Text className="text-base mt-2 text-yellow-300 font-bold mb-4">
        {rating === 1
          ? "Terrible"
          : rating === 2
          ? "Bad"
          : rating === 3
          ? "OK"
          : rating === 4
          ? "Good"
          : rating === 5
          ? "Excellent"
          : ""}
      </Text>

      <AirbnbRating
        count={5}
        showRating={false}
        defaultRating={3}
        size={30}
        onFinishRating={(rating) => setRating(rating)}
      />

    <Text className="text-base font-bold text-center text-slate-200 mt-4 mb-2">
        ------------------------------------------------------
    </Text>

      <TouchableOpacity className="bg-purple-400 py-3 rounded-2xl w-4/5 mx-auto mb-2 mt-64 ">
        <Text className="text-base font-bold text-center text-white">
          Send a Review
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;
