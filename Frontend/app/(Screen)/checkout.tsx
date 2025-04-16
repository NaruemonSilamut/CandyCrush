// CheckoutScreen.tsx
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen() {
  const router = useRouter();

  const [subtotal] = useState(300);
  const [cash, setCash] = useState(0);

  const change = cash - subtotal;

  return (
    <View className="flex-1 bg-white px-4 pt-14">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-lg font-bold text-gray-800">Checkout</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Subtotal */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-base text-gray-600">Subtotal</Text>
        <Text className="text-base text-gray-800">{subtotal}</Text>
      </View>

      {/* Cash input */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-base text-gray-600">Cash</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(val) => setCash(Number(val))}
          placeholder="Enter amount"
          className="bg-gray-100 px-4 py-2 rounded-md w-1/2 text-right"
        />
      </View>

      {/* Change */}
      <View className="flex-row justify-between mb-8">
        <Text className="text-base text-gray-600">Change</Text>
        <Text className="text-base text-gray-800">{change >= 0 ? change : 0}</Text>
      </View>

      {/* Place Order */}
      <TouchableOpacity className="bg-purple-300 py-4 rounded-full">
        <Text className="text-white text-center text-lg font-bold">Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
