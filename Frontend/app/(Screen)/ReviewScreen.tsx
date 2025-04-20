import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";


const ReviewScreen = () => {
  const [rating, setRating] = useState(0); // เริ่มต้นที่ 0 = ยังไม่ให้ดาว

  const handleRatingChange = (ratingValue: number) => {
    if (rating === ratingValue) {
      // ถ้ากดดาวเดิม (rating ซ้ำ) ให้กลับเป็น 0 (ยกเลิกการเลือก)
      setRating(0);
    } else {
      // เลือกดาวใหม่
      setRating(ratingValue);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Image
        source={require("../../assets/images/review.png")}
        resizeMode="contain"
        className="w-60 h-60 mb-4"
      />

      <Text className="text-left w-full mb-2 text-sm font-medium">Rating</Text>

      {/* แสดงข้อความเมื่อเลือกดาว */}
      {rating > 0 && (
        <Text className="text-base mt-2 text-yellow-500 font-bold mb-4">
          {rating === 1
            ? "Terrible"
            : rating === 2
            ? "Bad"
            : rating === 3
            ? "OK"
            : rating === 4
            ? "Good"
            : "Excellent"}
        </Text>
      )}

      <AirbnbRating
        count={5}
        defaultRating={rating}
        selectedColor="#FFB300"
        showRating={false}
        size={34}
        onFinishRating={handleRatingChange} // เปลี่ยนให้ทำงานกับ handleRatingChange
      />

      {/* แสดงปุ่มหรือข้อความเฉพาะเมื่อเลือกดาว */}
      {rating > 0 && (
        <>
          <Text className="text-base font-bold text-center text-slate-200 mt-4 mb-2">
            ------------------------------------------------------
          </Text>

          <TouchableOpacity
            className="py-4 px-4 rounded-full w-[150px] self-center mb-6 mt-20 bg-purple-300"
            onPress={() => router.push("/(tabs)/home")}
          >
            <Text className="text-base font-bold text-center text-white">
              Send a Review
            </Text>
          </TouchableOpacity>
        </>
      )}

      {/* แสดงข้อความเมื่อยังไม่ได้กดดาว */}
      {rating === 0 && (
        <Text className="text-center text-gray-500 mt-4">
          Please select a rating to submit your review.
        </Text>
      )}
    </View>
  );
};

export default ReviewScreen;
