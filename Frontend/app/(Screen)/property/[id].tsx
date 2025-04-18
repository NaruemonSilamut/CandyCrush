import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import images from '@/app/constant/images';

const productDetail = () => {
  const router = useRouter()
  const { id } = useLocalSearchParams()
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

  const getProductImageById = (id: string) => {
    switch (id) {
      case "1":
        return images.mocha; 
      case "2":
        return images.choco;
      case "3":
        return images.BlackBerry;
      case "4":
        return images.sakura;
      case "5":
        return images.rainbow;
      case "6":
        return images.cotton;
      case "7":
        return images.strawberry;
      case "8":
        return images.honey;
      case "9":
        return images.cookie;
      case "10":
        return images.mix;
      default:
        return null;
    }
  }

  // การคำนวณราคา
  const pricePerItem = 120;
  const scoopPrice = scoopLimit === 1 ? 15 : scoopLimit === 2 ? 30 : scoopLimit === 3 ? 45 : 0;
  const toppingPrice = toppingCounts.reduce((sum, val) => sum + (val ? 15 : 0), 0);
  const totalPrice = (pricePerItem + scoopPrice + toppingPrice) * quantity;
  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14" contentContainerClassName='pb-8'>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={getProductImageById(Array.isArray(id) ? id[0] : id)}
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

      {/* Product Info */}
      <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">Ice Cream {id}</Text>
        <Text className="text-lg font-semibold text-gray-600">120</Text>
      </View>
      <Text className="text-left text-gray-500 mb-4 px-1">Pretty in pink! This sweet strawberry scoop brings soft fruity notes and cuteness overload.</Text>

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
          {flavourCounts.map((flavour) => (
            <TouchableOpacity
              key={flavour.id}

              className={`w-[30%] ${flavour ? "bg-purple-100" : "bg-gray-100"} rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={flavour.image}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{flavour.name}</Text>  {/* แสดงชื่อรสไอศกรีม */}
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
          {toppingCounts.map((topping) => (
            <TouchableOpacity
              key={topping.id}

              className={`w-[30%] ${topping ? "bg-purple-100" : "bg-gray-100"} rounded-xl p-2 mb-3 items-center justify-center`}
            >
              <Image
                source={topping.image}
                className="w-18 h-18 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{topping.name}</Text> {/* แสดงชื่อท้อปปิ้ง */}
              <Text className="text-sm text-gray-400 mt-1">15฿</Text>
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
  )
}

export default productDetail