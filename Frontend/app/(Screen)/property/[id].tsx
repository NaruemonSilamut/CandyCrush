import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import images from "@/app/constant/images";

// จำลองราคาสินค้าแต่ละเมนู (ภายหลังสามารถดึงจาก backend ได้)
const productPrices: Record<string, number> = {
  "1": 120,
  "2": 130,
  "3": 130,
  "4": 120,
  "5": 130,
  "6": 130,
  "7": 120,
  "8": 100,
  "9": 100,
  "10": 100,
};

const productDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>(); // รับ id จาก route param

  // จำนวน scoop ที่เลือก
  const [scoopLimit, setScoopLimit] = useState(0);

  // จำนวนสินค้าที่จะสั่ง
  const [quantity, setQuantity] = useState(1);

  // เก็บรหัสของรสชาติและท้อปปิ้งที่เลือก
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  // รายการรสชาติไอศกรีม
  const flavourCounts = [
    { id: "1", name: "Matcha", image: images.matchaScoop },
    { id: "2", name: "Strawberry", image: images.strawberryScoop },
    { id: "3", name: "Creamy Berry", image: images.berryScoop },
    { id: "4", name: "Apple Cranberry", image: images.appleScoop },
    { id: "5", name: "Chocolate", image: images.chocolateScoop },
    { id: "6", name: "Pistachio", image: images.pitacchioScoop },
  ];

  // รายการท้อปปิ้ง
  const toppingCounts = [
    { id: "1", name: "Sprinkles", image: images.rainbowTopping },
    { id: "2", name: "Cherries", image: images.cherryTopping },
    { id: "3", name: "Strawberry", image: images.strawberryTopping },
    { id: "4", name: "Whipped Cream", image: images.creamTopping },
    { id: "5", name: "Candy Gems", image: images.candyTopping },
    { id: "6", name: "Almonds", image: images.almondTopping },
  ];

  // ดึงภาพตาม id
  const getProductImageById = (id: string) => {
    const imagesMap: Record<string, any> = {
      "1": images.mocha,
      "2": images.choco,
      "3": images.BlackBerry,
      "4": images.sakura,
      "5": images.rainbow,
      "6": images.cotton,
      "7": images.strawberry,
      "8": images.honey,
      "9": images.cookie,
      "10": images.mix,
    };
    return imagesMap[id];
  };

  // ค่าราคาหลักต่อเมนู
  const pricePerItem = productPrices[id] || 120;

  // คำนวณราคารวม
  const scoopPrice = scoopLimit * 15;
  const toppingPrice = selectedToppings.length * 15;
  const totalPrice = (pricePerItem + scoopPrice + toppingPrice) * quantity;

  // toggle ท้อปปิ้ง (เลือกได้สูงสุด 2 อย่าง)
  const toggleTopping = (toppingId: string) => {
    setSelectedToppings((prev) => {
      if (prev.includes(toppingId))
        return prev.filter((id) => id !== toppingId);
      if (prev.length < 2) return [...prev, toppingId];
      return prev;
    });
  };

  // toggle รสชาติ (ตามจำนวน scoopLimit)
  const toggleFlavour = (flavourId: string) => {
    setSelectedFlavours((prev) => {
      if (prev.includes(flavourId))
        return prev.filter((id) => id !== flavourId);
      if (prev.length < scoopLimit) return [...prev, flavourId];
      return prev;
    });
  };

  // reset flavour ถ้า scoop ถูกเปลี่ยน
  useEffect(() => {
    setSelectedFlavours([]);
  }, [scoopLimit]);

  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14 pb-10">
      {/* ปุ่มกลับ */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>
      {/* รูปสินค้า */}
      <Image
        source={getProductImageById(id)}
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />
      {/* รายละเอียดสินค้า */}
      <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">Ice Cream #{id}</Text>
        <Text className="text-lg font-semibold text-gray-600">
          {pricePerItem}฿
        </Text>
      </View>

     {/* 🛠 แก้แค่ตรง map scoop, flavour, topping ให้แน่ใจว่า key ถูกต้อง */}
     {/* อย่าใช้ index เป็น key เพราะมันอาจซ้ำ */}
      {/* Scoop Selection */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        {[1, 2].map((num) => (
          <TouchableOpacity
            key={`scoop-${num}`} // ✅ ชัวร์ว่า key ไม่ซ้ำ
            onPress={() => setScoopLimit(num)}
            className={`flex-row justify-between items-center mb-2 p-2 rounded-xl ${
              scoopLimit === num ? "bg-purple-200" : "bg-gray-100"
            }`}
          >
            <Text>
              Add {num} Scoop{num > 1 ? "s" : ""}
            </Text>
            <Text>{num * 15}฿</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Flavour Selection */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">Flavour (Choose {scoopLimit}) </Text>
        <View className="flex-row flex-wrap justify-between">
          {flavourCounts.map((f) => (
            <TouchableOpacity
              key={`flavour-${f.id}`} // ✅ ใช้ key ที่ unique จริง
              onPress={() => toggleFlavour(f.id)}
              className={`w-[30%] rounded-xl p-2 mb-3 items-center justify-center ${
                selectedFlavours.includes(f.id)
                  ? "bg-purple-200"
                  : "bg-gray-100"
              }`}
            >
              <Image
                source={f.image}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{f.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Topping Selection */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-lg font-semibold flex-row justify-between items-center mb-3 ">Topping (Choose up to 2 toppings)</Text>
        <View className="flex-row flex-wrap justify-between">
          {toppingCounts.map((t) => (
            <TouchableOpacity
              key={`topping-${t.id}`} // ✅ key ไม่ซ้ำกันแน่
              onPress={() => toggleTopping(t.id)}
              className={`w-[30%] rounded-xl py-2 px-2 mb-3 items-center justify-center ${
                selectedToppings.includes(t.id)
                  ? "bg-purple-200"
                  : "bg-gray-100"
              }`}
            >
              <Image
                source={t.image}
                className="w-16 h-16 mb-2"
                resizeMode="contain"
              />
              <Text className="text-center text-sm">{t.name}</Text>
              <Text className="text-sm text-gray-500">15฿</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      {/* Quantity Control */}
      <View className="flex-row justify-center items-center my-4">
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full"
          onPress={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          <Text className="text-lg font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold mx-4">{quantity}</Text>
        <TouchableOpacity
          className="bg-gray-300 w-8 h-8 items-center justify-center rounded-full"
          onPress={() => setQuantity((prev) => prev + 1)}
        >
          <Text className="text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Bar */}
      <View className="flex-row justify-between items-center px-4 mb-10 w-full">
        {/* Total Price */}
        <Text className="text-gray-800 font-semibold text-lg">
          Total: {totalPrice * quantity}฿
        </Text>

        {/* Button */}
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

export default productDetail;
