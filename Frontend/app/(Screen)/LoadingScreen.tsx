import React from "react";
import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";

const LoadingScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#ffffff] px-6 ">
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={1500}
        source={require("../../assets/images/logo.jpg")
        }
        resizeMode="cover"
        className="w-48 h-48 mb-4"
      />
    </View>
  );
};

export default LoadingScreen;
