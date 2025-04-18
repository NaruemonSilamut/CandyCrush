import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Image,Dimensions,} from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

const RegisterScreen = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white relative">
      {/* พื้นหลังม่วง */}
      <View
        className="absolute top-0 left-0 right-0 bg-[#E5D8FF] items-center justify-center"
        style={{
          height: height * 0.5, borderBottomLeftRadius: 80, borderBottomRightRadius: 80,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-40 h-40 mb-28 mt-22"
          resizeMode="contain"
        />
      </View>

      {/* กล่อง Signup */}
      <View
        className="absolute self-center bg-white rounded-2xl shadow-lg px-6 py-10 mb-10 mt-10"
        style={{
          top: height * 0.28,
          width: "80%",
        }}
      >
        <Text className="text-center text-3xl font-bold mb-6">Signup</Text>

        {/* Name */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 bg-white">
          <FontAwesome name="user" size={20} color="black" />
          <TextInput
            placeholder="Name"
            className="flex-1 ml-2 py-3 text-gray-800"
          />
        </View>

        {/* Email */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 bg-white">
          <FontAwesome name="envelope" size={18} color="black" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="flex-1 ml-2 py-3 text-gray-800"
          />
        </View>

        {/* Password */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 mb-4 bg-white">
          <FontAwesome6 name="lock" size={18} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            className="flex-1 ml-2 py-3 text-gray-800"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome6
              name={showPassword ? "eye-slash" : "eye"}
              size={18}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          className="bg-[#b288f1] mt-4 py-3 rounded-xl"
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text className="text-center text-white font-bold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Text */}
      <View className="absolute self-center" style={{ top: height * 0.83 }}>
        <Text className="text-center text-base text-gray-800">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(Screen)/login")}>
          <Text className="text-pink-500 font-bold text-lg mt-1 text-center">
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
