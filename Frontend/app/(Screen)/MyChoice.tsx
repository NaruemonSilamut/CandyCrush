import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import images from "../constant/images";
const MyChoice = () => {
  const router = useRouter();

  const [scoopLimit, setScoopLimit] = useState(0);
  const [quantity, setQuantity] = useState(1);

 // รายชื่อรสชาติไอศกรีม
   const flavourCounts = [
     { id: "1", name: "Matcha", image: images.matchaScoop },
     { id: "2", name: "Strawberry", image: images.strawberryScoop },
     { id: "3", name: "Creamy Berry", image: images.berryScoop },
     { id: "4", name: "Apple Cranberry", image: images.appleScoop },
     { id: "5", name: "Chocolate", image: images.chocolateScoop },
     { id: "6", name: "Pistachio", image: images.pitacchioScoop }
   ];
 
   // รายชื่อท้อปปิ้ง
   const toppingCounts = [
     { id: "1", name: "Sprinkles", image: images.rainbowTopping },
     { id: "2", name: "Cherries", image: images.cherryTopping },
     { id: "3", name: "Strawberry", image: images.strawberryTopping },
     { id: "4", name: "Whipped Cream", image: images.creamTopping },
     { id: "5", name: "Candy Gems", image: images.candyTopping },
     { id: "6", name: "Almonds", image: images.almondTopping }
   ];
    // การคำนวณราคา
  const pricePerItem = 120;
  const scoopPrice = scoopLimit === 1 ? 15 : scoopLimit === 2 ? 30 : scoopLimit === 3 ? 45 : 0;
  const toppingPrice = toppingCounts.reduce((sum, val) => sum + (val ? 15 : 0), 0);
  const totalPrice = (pricePerItem + scoopPrice + toppingPrice) * quantity;
  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={images.mix} // ใช้ scoopLimit - 1 เพื่อให้ตรงกับค่าที่เลือก
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

      {/* Product Info */}
      <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">My Cone, My Choice!</Text>
        <Text className="text-lg font-semibold text-gray-600">
          ฿{pricePerItem}
        </Text>
      </View>
      <Text className="text-left text-gray-500 mb-4 px-1">
        Pick 2 and 3 flavors of your choice! Mix happiness into your cone and enjoy a new combo every time!
      </Text>

      {/* Add Scoop Section */}
      <View className="flex-row justify-between mb-6 px-2">
        {[1, 2, 3].map((num, idx) => (
          <TouchableOpacity
            key={num}
            onPress={() => setScoopLimit(num)}
            className={`px-4 py-3 rounded-xl border w-[30%] items-center ${
              scoopLimit === num
                ? "bg-purple-200 border-purple-400"
                : "border-gray-300"
            }`}
          >
            {/* <Image
              source={getIconUri(idx, "scoop")}
              className="w-10 h-10 mb-1"
            /> */}
            <Text className="text-center font-medium">{num} Scoop</Text>
            <Text className="text-sm text-gray-400">{num * 15}฿</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Flavour Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Flavour
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {flavourCounts.map((flavour) => (
            <TouchableOpacity
              key={flavour.id}
              
              className={`w-[30%] ${
                flavour ? "bg-purple-100" : "bg-gray-100"
              } rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={flavour.image}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{flavour.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Topping Section */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-800">Topping</Text>
          <Text className="text-sm text-gray-400 ml-2">
            เลือกได้สูงสุด 2 อย่าง
          </Text>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {toppingCounts.map((topping) => (
            <TouchableOpacity
              key={topping.id}
              className={`w-[30%] ${
                topping ? "bg-purple-100" : "bg-gray-100"
              } rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={topping.image}
                className="w-14 h-14 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{topping.name}</Text>
              <Text className="text-xs text-gray-400">15฿</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quantity Control */}
      <View className="flex-row justify-center items-center mb-6">
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full mr-4"
          onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          <Text className="text-lg font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{quantity}</Text>
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full ml-4"
          onPress={() => setQuantity((prev) => prev + 1)}
        >
          <Text className="text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center mx-4 mb-10">
        <View className="flex-row items-center">
          <Text className="text-gray-800 font-semibold text-lg">
            Total: {totalPrice}
          </Text>
          <Text className="text-gray-800 font-semibold text-lg ml-2">
            x {quantity}
          </Text>
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

export default MyChoice;
