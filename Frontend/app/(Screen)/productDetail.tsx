import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const ProductDetailScreen = () => {
  const router = useRouter();
  const [flavourCounts, setFlavourCounts] = useState(Array(6).fill(0));
  const [toppingCounts, setToppingCounts] = useState(Array(6).fill(0));
  const [scoopLimit, setScoopLimit] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const totalFlavour = flavourCounts.reduce((sum, count) => sum + count, 0);
  const totalTopping = toppingCounts.reduce((sum, count) => sum + count, 0);

  const handleSelectFlavour = (index: number) => {
    const newCounts = Array(6).fill(0);
    if (scoopLimit === 1) {
      newCounts[index] = 1;
    } else if (scoopLimit === 2 || scoopLimit === 3) {
      const currentTotal = flavourCounts.reduce((sum, count) => sum + count, 0);
      if (currentTotal < scoopLimit || flavourCounts[index] > 0) {
        newCounts[index] = flavourCounts[index] === 1 ? 0 : 1;
        let selected = flavourCounts.map((c, i) => (i === index ? newCounts[i] : c));
        if (selected.reduce((a, b) => a + b, 0) <= scoopLimit) setFlavourCounts(selected);
        return;
      }
    }
    setFlavourCounts(newCounts);
  };

  const handleSelectTopping = (index: number) => {
    const newCounts = [...toppingCounts];
    newCounts[index] = newCounts[index] === 1 ? 0 : 1;
    if (newCounts.reduce((sum, count) => sum + count, 0) <= 2) {
      setToppingCounts(newCounts);
    }
  };

  const pricePerItem = 120;
  const scoopPrice = scoopLimit === 1 ? 15 : scoopLimit === 2 ? 30 : 45;
  const toppingPrice = toppingCounts.reduce((sum, val) => sum + (val ? 15 : 0), 0);
  const totalPrice = (pricePerItem + scoopPrice + toppingPrice) * quantity;

  const getIconUri = (index: number) => {
    const icons = [
      "https://cdn-icons-png.flaticon.com/512/1046/1046750.png",
      "https://cdn-icons-png.flaticon.com/512/1046/1046758.png",
      "https://cdn-icons-png.flaticon.com/512/1046/1046759.png",
      "https://cdn-icons-png.flaticon.com/512/1046/1046760.png",
      "https://cdn-icons-png.flaticon.com/512/1046/1046761.png",
      "https://cdn-icons-png.flaticon.com/512/1046/1046762.png",
    ];
    return icons[index % icons.length];
  };

  const scoopIcons = [
    "https://cdn-icons-png.flaticon.com/512/3239/3239952.png",
    "https://cdn-icons-png.flaticon.com/512/3239/3239945.png",
    "https://cdn-icons-png.flaticon.com/512/3239/3239961.png",
  ];

  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={{ uri: getIconUri(0) }}
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

     {/* Product Info */}
     <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">Creamy Latte</Text>
        <Text className="text-lg font-semibold text-gray-600">120</Text>
      </View>
      <Text className="text-left text-gray-500 mb-4 px-1">Ice americano + fresh milk</Text>


      {/* Add Scoop Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <TouchableOpacity
          onPress={() => setScoopLimit(1)}
          className="flex-row items-center justify-between mb-3"
        >
          <View className="flex-row items-center">
            <View className={`w-5 h-5 border-2 rounded mr-2 ${scoopLimit === 1 ? "bg-gray-800" : "border-gray-400"}`} />
            <Text>Add 1 scoop</Text>
          </View>
          <Text>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScoopLimit(2)}
          className="flex-row items-center justify-between"
        >
          <View className="flex-row items-center">
            <View className={`w-5 h-5 border-2 rounded mr-2 ${scoopLimit === 2 ? "bg-gray-800" : "border-gray-400"}`} />
            <Text>Add 2 scoop</Text>
          </View>
          <Text>30</Text>
        </TouchableOpacity>
      </View>

      {/* Flavour Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">Flavour</Text>
        <View className="flex-row flex-wrap justify-between">
          {flavourCounts.map((count, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectFlavour(index)}
              className={`w-[30%] ${count ? "bg-purple-100" : "bg-gray-100"} rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={{ uri: getIconUri(index) }}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">Strawberry</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      
     {/* Topping Section */}
     <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-800">Topping</Text>
          <Text className="text-sm text-gray-400 ml-2 center">เลือกได้สูงสุด 2 อย่าง</Text>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {toppingCounts.map((count, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectTopping(index)}
              className={`w-[30%] ${
                count ? "bg-purple-100" : "bg-gray-100"
              } rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={{ uri: getIconUri(index + 3) }}
                className="w-14 h-14 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">Cherries</Text>
              <Text className="text-sm text-gray-400 ">15฿</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>


      {/* Quantity Control */}
      <View className="flex-row justify-center items-center mb-6">
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full mr-4"
          onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
        >
          <Text className="text-lg font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{quantity}</Text>
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full ml-4"
          onPress={() => setQuantity(prev => prev + 1)}
        >
          <Text className="text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center mx-4 mb-10">
        <View className="flex-row items-center">
          <Text className="text-gray-800 font-semibold text-lg">Total: {totalPrice}</Text>
          <Text className="text-gray-800 font-semibold text-lg ml-2">x {quantity}</Text>
        </View>
        <TouchableOpacity
          className="bg-purple-400 py-3 px-5 rounded-full"
          onPress={() => router.push("/cart1")}
        >
          <Text className="text-white font-semibold">Add to order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


export default ProductDetailScreen;