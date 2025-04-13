import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import * as Animatable from "react-native-animatable";


const index = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(Screen)/SucceedScreen");
  };

  const handleRegister = () => {
    router.push("/(Screen)/Register");
  };
  return (
    <View className="flex-1 relative">
      <Image
        source={require("../assets/images/home.png")}
        resizeMode="cover"
        className="w-full h-full absolute"
      />
      <View className="absolute bottom-10 w-full items-center space-y-4">
      <Animatable.View
                animation="fadeInUp"
                delay={800}
                duration={1000}
                className="absolute bottom-10 items-center space-y-4"
        >
        <TouchableOpacity
          onPress={handleLogin}
          className="border-2 border-pink-400 px-8 py-3 rounded-full mb-5 w-36 "
        >
          <Text className="text-xl font-bold text-white text-center ">
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} className="border-2 border-pink-400 px-8 py-3 rounded-full mb-5 ${pressed ? 'bg-pink-600' : 'bg-pink-400'">
          <Text className="text-xl font-bold text-white">Register</Text>
        </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default index;
