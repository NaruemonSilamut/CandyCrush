import React, { useEffect }from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useRouter } from "expo-router";

const LoadingScreen = () => {
  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/(Screen)/SucceedScreen");
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#ffffff] px-6 ">
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={1500}
        source={require("../../assets/images/Shopping Cart.png")
        }
        resizeMode="cover"
        className="w-48 h-48 mb-4"
      />
    </View>
  );
};

export default LoadingScreen;
