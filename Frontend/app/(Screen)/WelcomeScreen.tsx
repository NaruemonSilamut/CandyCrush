import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import images from "../constant/images";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-end items-center bg-white">
      {/* Background image */}
      <Image
        source={images.Rebecca}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
      />

      {/* Buttons */}
      <View className="w-full px-10 pb-16 space-y-2">
        <TouchableOpacity
          className="bg-pink-300 border border-pink-300  py-2 rounded-full mx-auto w-32 mt-4 mb-2"
          onPress={() => router.push("/register")}
        >
          <Text className="text-center text-white font-medium text-base" style={{ fontFamily: "Poppins" }}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-pink-300   py-2 rounded-full mx-auto w-32 mt-4 bg-pink-300"
          onPress={() => router.push("/login")}
        >
          <Text className="text-center  text-white font-medium text-base" style={{ fontFamily: "Poppins" }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

