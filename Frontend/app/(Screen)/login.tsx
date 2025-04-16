import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const handleRegister = () => {
    //@ts-ignore
    router.push("/(Screen)/register");
  };
  return (
    <View className="flex-1 justify-center items-center bg-[#E5D8FF] px-6 ">
      <View className="bg-white w-full rounded-2xl p-6 shadow-lg">
        <Text className="text-center text-xl font-bold mb-6">Login</Text>

        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4">
          <FontAwesome name="user" size={20} color="black" />
          <TextInput
            className="flex-1 ml-2 py-3 text-gray-800"
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 mb-2">
          <FontAwesome6 name="lock" size={18} color="black" />
          <TextInput
            className="flex-1 ml-2 py-3 text-gray-800"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        {/* <Text className="text-right text-sm text-gray-600 mb-6">
          Forget Password?
        </Text> */}
        <TouchableOpacity className="bg-purple-400 py-3 rounded-2xl w-full mx-auto mb-2 mt-4">
          <Text className="text-white text-center font-bold text-lg">
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-base  mt-24">
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text className="text-pink-400 text-center font-bold text-lg mt-2">
          REGISTER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
