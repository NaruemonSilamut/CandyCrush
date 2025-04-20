import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen() {
  const router = useRouter();

  const [subtotal] = useState(300);
  const [cash, setCash] = useState(0);

  const change = cash - subtotal;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="flex-1 justify-center items-center px-4">
        {/* กล่อง Checkout */}
        <View className="bg-gray-50 w-full max-w-md p-4 rounded-2xl shadow relative">

          {/* Header: Checkout + X */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-center text-gray-900 ">Checkout</Text>

            <TouchableOpacity onPress={() => router.back()} className="absolute top-0 right-0 p-2">
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Subtotal */}
          <View className="flex-row justify-between items-center mb-4 px-1 mt-12 right-4">
            <Text className="text-base text-gray-600 left-8">Subtotal</Text>
            <Text className="text-lg font-semibold text-gray-800">
              ฿{subtotal.toFixed(2)}
            </Text>
          </View>

          {/* Cash input */}
          <View className="flex-row justify-between items-center mb-4 px-1 mt-6 right-4">
            <Text className="text-base text-gray-600 left-8">Cash</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(val) => setCash(Number(val))}
              placeholder="Enter amount"
              className="bg-white px-4 py-2 rounded-md w-[140px] text-right font-semibold text-gray-800 border border-gray-300"
            />
          </View>

          {/* Change */}
          <View className="flex-row justify-between items-center mb-4 px-1 mt-6 right-4">
            <Text className="text-base text-gray-600 left-8">Change</Text>
            <Text
              className={`text-lg font-semibold ${
                change >= 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              ฿{(change >= 0 ? change : 0).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* ปุ่ม Place Order */}
        <TouchableOpacity
          className="bg-purple-300 py-3 px-6 rounded-full w-[160px] self-center mt-12"
          onPress={() => router.push("/(Screen)/LoadingScreen")}
        >
          <Text className="text-white text-center text-base font-bold">Place Order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
