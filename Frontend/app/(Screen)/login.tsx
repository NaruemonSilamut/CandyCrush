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
import { useAuthStore } from "../../store/store";

const API_URL = Constants.expoConfig?.extra?.API_URL;
const { height } = Dimensions.get("window");

interface LoginForm {
  userEmail: string;
  userPassword: string;
}

const LoginScreen = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const login = useAuthStore((state) => state.login);

  // ✅ สร้าง form state แบบรวม
  const [form, setForm] = useState<LoginForm>({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (field: keyof LoginForm, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleLogin = async () => {
    if (!form.userEmail || !form.userPassword) {
      alert("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    try {
      console.log("Logging in with:", form);
      

      const res = await login(form.userEmail, form.userPassword);

      alert("เข้าสู่ระบบสำเร็จ!");
      router.push("/(tabs)/home");
    } catch (error: any) {
      console.error("❌ Login error:", error?.response?.data || error);
      alert("เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบข้อมูลอีกครั้ง");
    }
  };

  return (
    <View className="flex-1 bg-white relative">

      {/* พื้นหลังม่วง */}
      <View
        className="absolute top-0 left-0 right-0 bg-[#E5D8FF] items-center justify-center"
        style={{ height: height * 0.5, borderBottomLeftRadius: 80, borderBottomRightRadius: 80 }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-40 h-40 mb-28 mt-22"
          resizeMode="contain"
        />
      </View>

      {/* กล่อง Login */}
      <View
        className="absolute self-center bg-white rounded-2xl shadow-lg px-6 py-10 mb-10 mt-10"
        style={{ top: height * 0.28, width: "80%" }}
      >
        <Text className="text-center text-3xl font-bold mb-6">Login</Text>

        {/* Email */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-white">
          <FontAwesome name="user" size={18} color="black" />
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={form.userEmail}
            onChangeText={(value) => handleChange("userEmail", value)}
            className="flex-1 ml-2 py-2 text-gray-800"
          />
        </View>

        {/* Password */}
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mt-4 mb-4 bg-white">
          <FontAwesome6 name="lock" size={18} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={form.userPassword}
            onChangeText={(value) => handleChange("userPassword", value)}
            className="flex-1 ml-2 py-2 text-gray-800"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome6 name={showPassword ? "eye-slash" : "eye"} size={18} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className="bg-[#b288f1] mt-8 py-3 rounded-xl"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </View>

      {/* REGISTER Text ใต้กล่อง */}
      <View className="absolute self-center" style={{ top: height * 0.83 }}>
        <Text className="text-center text-base text-gray-800">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(Screen)/register")}>
          <Text className="text-pink-500 font-bold text-lg mt-1 text-center">REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
