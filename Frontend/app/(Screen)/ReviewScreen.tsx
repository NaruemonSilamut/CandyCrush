import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { useRouter } from "expo-router";

const ReviewScreen = () => {
  const [rating, setRating] = useState(3);
  const router = useRouter();

  const getRatingLabel = (rating: number) => {
    switch (rating) {
      case 1: return "Terrible";
      case 2: return "Bad";
      case 3: return "OK";
      case 4: return "Good";
      case 5: return "Excellent";
      default: return "";
    }
  };

  const handleSendReview = () => {
    Alert.alert(
      "Thank you!",
      `You rated ${rating} star(s).`,
      [
        {
          text: "OK",
          onPress: () => {
            router.push("/(tabs)/home"); // เส้นทางไปหน้า home ของคุณ
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View className="flex-1 justify-between items-center bg-white px-6 py-10">
      <View className="w-full items-center">
        <Image
          source={require("../../assets/images/review.png")}
          resizeMode="contain"
          className="w-40 h-40 mb-6"
        />

        <Text className="text-left w-full mb-2 text-sm font-medium">Rating</Text>
        <Text className="text-base mt-2 text-yellow-400 font-bold mb-4">
          {getRatingLabel(rating)}
        </Text>

        <AirbnbRating
          count={5}
          showRating={false}
          defaultRating={rating}
          size={30}
          onFinishRating={(r) => setRating(r)}
        />
      </View>

      <TouchableOpacity
        onPress={handleSendReview}
        className="bg-purple-400 py-3 rounded-2xl w-full"
      >
        <Text className="text-base font-bold text-center text-white">
          Send a Review
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;
