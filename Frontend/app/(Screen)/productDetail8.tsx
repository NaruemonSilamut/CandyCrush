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

  const flavours = [
    "Matcha", "Strawberry", "Creamy Berry", "Apple Cranberry", "Chocolate", "Pistachio"
  ]; // ใส่ชื่อรสไอศกรีมที่คุณต้องการ

  const toppings = [
    "Whipped Cream", "Candy Gems", "Almonds", "Sprinkles", "Cherries", "Strawberry"
  ]; // ใส่ชื่อท้อปปิ้งที่คุณต้องการ

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

  const getIconUri = (index: number, type: string) => {
    const icons = {
      flavour: [
        require("../../assets/images/i1.png"),
        require("../../assets/images/i2.png"),
        require("../../assets/images/i3.png"),
        require("../../assets/images/i4.png"),
        require("../../assets/images/i5.png"),
        require("../../assets/images/i6.png"),
      ],
      topping: [
        require("../../assets/images/25.png"),
        require("../../assets/images/24.png"),
        require("../../assets/images/21.png"),
        require("../../assets/images/22.png"),
        
        require("../../assets/images/20.png"),
        require("../../assets/images/23.png"),
      ],
    };
    return icons[type][index % icons[type].length]; // Return image based on type and index
  };

  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={require("../../assets/images/7.png")}  // Use getIconUri to fetch the correct image based on type (flavour in this case)
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

      {/* Product Info */}
      <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">Black Berry</Text>
        <Text className="text-lg font-semibold text-gray-600">140</Text>
      </View>
      <Text className="text-left text-gray-500 mb-4 px-1">Intense berry-flavored ice cream with a sweet and tangy profile, topped with dried blackberries for a velvety smooth texture.</Text>

      {/* Add Scoop Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <TouchableOpacity
          onPress={() => setScoopLimit(1)}
          className="flex-row items-center justify-between mb-3"
        >
          <View className="flex-row items-center">
            <View className={`w-5 h-5 border-2 rounded mr-2 ${scoopLimit === 1 ? "bg-purple-400" : "border-gray-400"}`} />
            <Text>Add 1 scoop</Text>
          </View>
          <Text>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScoopLimit(2)}
          className="flex-row items-center justify-between"
        >
          <View className="flex-row items-center">
            <View className={`w-5 h-5 border-2 rounded mr-2 ${scoopLimit === 2 ? "bg-purple-400" : "border-gray-400"}`} />
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
                source={getIconUri(index, "flavour")}
                className="w-20 h-20 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{flavours[index]}</Text>  {/* Show flavour name */}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Topping Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-800">Topping</Text>
          <Text className="text-sm text-gray-400 ml-2 px-12 items-center">เลือกได้สูงสุด 2 อย่าง</Text>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {toppingCounts.map((count, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectTopping(index)}
              className={`w-[30%] ${count ? "bg-purple-100" : "bg-gray-100"} rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={getIconUri(index, "topping")}
                className="w-18 h-18 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{toppings[index]}</Text> {/* Show topping name */}
              <Text className="text-sm text-gray-400 mt-1">15฿</Text>
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
        </View>
        <TouchableOpacity
          className="bg-purple-400 py-3 px-5 rounded-full"
          onPress={() => router.push("/(tabs)/cart1")}
        >
          <Text className="text-white font-semibold">Add to order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
