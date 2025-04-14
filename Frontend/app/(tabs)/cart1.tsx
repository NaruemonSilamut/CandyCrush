import { View, Text, Image, ScrollView, TouchableOpacity, Animated, PanResponder } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function CartScreen() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      name: "Creamy Latte",
      options: ["Hot", "Extra Milk", "No Sugar"],
      price: 250,
      quantity: 1,
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046750.png",
    },
    {
      name: "Creamy Latte",
      options: ["Iced", "No Milk"],
      price: 250,
      quantity: 1,
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046758.png",
    },
  ]);

  const handleIncrement = (index : number) => {
    const updated = [...cartItems];
    updated[index].quantity++;
    setCartItems(updated);
  };

  const handleDecrement = (index : number) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity--;
      setCartItems(updated);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const panRefs = useRef(cartItems.map(() => new Animated.Value(0))).current;

  const createPanResponder = (index : number) => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: panRefs[index] },
      ], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          handleRemoveItem(index);
        } else {
          Animated.spring(panRefs[index], {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ScrollView className="flex-1 bg-[#f5f5f5] px-4 pt-14">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#555" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#3a2c2c]">my Cart</Text>
        <TouchableOpacity onPress={() => console.log("Close cart")}> {/* ปรับตามต้องการ */}
          <View className="bg-red-100 p-1 rounded-full">
            <AntDesign name="closecircle" size={24} color="red" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Top buttons */}
      <View className="flex-row justify-between mb-4 px-2">
        <TouchableOpacity>
          <Text className="text-yellow-600 font-bold text-sm">Order item</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-green-600 font-bold text-sm">Add item</Text>
        </TouchableOpacity>
      </View>

      {/* Items */}
      {cartItems.map((item, index) => {
        const panResponder = createPanResponder(index);
        return (
          <Animated.View
            key={index}
            {...panResponder.panHandlers}
            style={{ transform: [{ translateX: panRefs[index] }] }}
            className="bg-white rounded-2xl p-4 mb-4 shadow-sm flex-row justify-between items-start"
          >
            <View className="w-[30%] items-center">
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-full mb-3 border border-gray-200"
                resizeMode="contain"
              />
              <View className="flex-row items-center justify-center bg-gray-100 px-3 py-1 rounded-full">
                <TouchableOpacity className="px-2" onPress={() => handleDecrement(index)}>
                  <Text className="text-lg font-bold">-</Text>
                </TouchableOpacity>
                <Text className="text-md font-bold mx-2">{item.quantity}</Text>
                <TouchableOpacity className="px-2" onPress={() => handleIncrement(index)}>
                  <Text className="text-lg font-bold">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="w-[65%]">
              <View className="flex-row justify-between">
                <Text className="font-semibold text-base text-gray-800 mb-1">{item.name}</Text>
                <Text className="font-bold text-gray-700">{item.price}</Text>
              </View>
              {item.options.map((opt, i) => (
                <Text key={i} className="text-sm text-gray-500">{opt}</Text>
              ))}
              <TouchableOpacity className="mt-2" onPress={() => console.log("Edit item")}>
                <Text className="text-purple-500 font-medium text-sm">✏️ Edit</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        );
      })}

      {/* Subtotal */}
      <View className="flex-row justify-between items-center px-1 mt-6 mb-4">
        <Text className="text-base text-gray-600 font-semibold">Subtotal</Text>
        <Text className="text-base text-gray-800 font-semibold">{subtotal}</Text>
      </View>

       {/* Checkout Button */}
       <TouchableOpacity
        className="bg-purple-300 mx-4 py-4 rounded-full mb-4"
        onPress={() => router.push("/checkout")}
      >
        <Text className="text-white text-center text-lg font-bold">Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() => router.push("/(tabs)/home")}
      >
        <Text className="text-sm text-gray-600">Back to Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}