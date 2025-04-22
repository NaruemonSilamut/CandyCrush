import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import axios from "axios";



const API_URL = Constants.expoConfig?.extra?.API_URL;
const { height } = Dimensions.get("window");

interface FormState {
  name: string;
  userEmail: string;
  userPassword: string;
  userPhone: string;
}

const RegisterScreen = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleRegister = async () => {
    const [first, last] = form.name.trim().split(" ");
    const userFirstname = first || "";
    const userLastname = last || "Lastname";

    try {
      await axios.post(`${API_URL}/register`, {
        userFirstname,
        userLastname,
        userEmail: form.userEmail,
        userPhone: form.userPhone,
        userPassword: form.userPassword,
      });
      alert("Registration successful! Please log in.");
      router.push("/(Screen)/login");
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <View className="flex-1 bg-white relative">
      
      <View
        className="absolute top-0 left-0 right-0 bg-[#E5D8FF] items-center justify-center"
        style={{
          height: height * 0.5,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-40 h-40 mb-28 mt-22"
          resizeMode="contain"
        />
      </View>


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
            value={form.name}
            placeholder="Name"
            onChangeText={(value) => handleChange("name", value)}
            className="flex-1 ml-2 py-3 text-gray-800"
          />
        </View>

        {/* Email */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 bg-white">
          <FontAwesome name="envelope" size={18} color="black" />
          <TextInput
            value={form.userEmail}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(value) => handleChange("userEmail", value)}
            className="flex-1 ml-2 py-3 text-gray-800"
          />
        </View>

        {/* Phone */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4 bg-white">
          <FontAwesome name="phone" size={20} color="black" />
          <TextInput
            value={form.userPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={(value) => handleChange("userPhone", value)}
            className="flex-1 ml-2 py-3 text-gray-800"
          />
        </View>

        {/* Password */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 mb-4 bg-white">
          <FontAwesome6 name="lock" size={18} color="black" />
          <TextInput
            value={form.userPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(value) => handleChange("userPassword", value)}
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

        <TouchableOpacity
          className="bg-[#b288f1] mt-4 py-3 rounded-xl"
          onPress={handleRegister}
        >
          <Text className="text-center text-white font-bold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <View className="absolute self-center" style={{ top: height * 0.83 }}>
        <Text className="text-center text-base text-gray-800">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(Screen)/login")}>
          <Text className="text-pink-500 font-bold text-lg mt-1 text-center">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
