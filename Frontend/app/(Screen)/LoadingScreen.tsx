import React, { useEffect } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

const LoadingScreen = () => {
  const router = useRouter();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      router.push("/(Screen)/SucceedScreen");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#FDEBEB", "#EADCF9", "#D7C7F4"]}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          minHeight: height,
        }}
      >
        <Animatable.Image
          animation="bounce"
          iterationCount="infinite"
          duration={1500}
          source={require("../../assets/images/logoll.png")}
          resizeMode="contain"
          style={{ width: 180, height: 180, marginBottom: 24 }}
        />

        <Animatable.Text
          animation="fadeInUp"
          duration={1000}
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Processing your order...
        </Animatable.Text>
      </View>
    </LinearGradient>
  );
};

export default LoadingScreen;
