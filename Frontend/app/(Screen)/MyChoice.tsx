import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import images from "../constant/images";
import axios from "axios";

const MyChoice = () => {
  const router = useRouter();
  const pricePerItem = 100; // base price ต่อชิ้น

  const [scoopLimit, setScoopLimit] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
       const res = await axios.get("https://cold-carrots-exist.loca.lt/api/icecream"); // เปลี่ยน URL ตามที่ต้องการ
        const data = res.data;
        console.log("Fetched data:", data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // รายการรสชาติ
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


  // คำนวณราคารวม
  const scoopPrice = scoopLimit * 15;
  const toppingPrice = selectedToppings.length * 15;
  const totalPrice = (pricePerItem + scoopPrice + toppingPrice) * quantity;

  // toggle รสชาติ (ตาม scoop ที่เลือก)
  const toggleFlavour = (id: string) => {
    setSelectedFlavours((prev) => {
      if (prev.includes(id)) return prev.filter((f) => f !== id);
      if (prev.length < scoopLimit) return [...prev, id];
      return prev;
    });
  };

  // toggle ท้อปปิ้ง (เลือกได้ 2 อย่าง)
  const toggleTopping = (id: string) => {
    setSelectedToppings((prev) => {
      if (prev.includes(id)) return prev.filter((t) => t !== id);
      if (prev.length < 2) return [...prev, id];
      return prev;
    });
  };

  // reset flavour เมื่อ scoop เปลี่ยน
  useEffect(() => {
    setSelectedFlavours([]);
  }, [scoopLimit]);

  return (
    <ScrollView className="flex-1 bg-[#f9f9f9] px-4 pt-14 pb-8">
      {/* ปุ่มย้อนกลับ */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* รูปสินค้า */}
      <Image
        source={images.mix}
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

      {/* ข้อมูลสินค้า */}
      <View className="flex-row justify-between items-center px-1 mb-2">
        <Text className="text-xl font-bold text-gray-800">
          My Cone, My Choice!
        </Text>
        <Text className="text-lg font-semibold text-gray-600">
          ฿{pricePerItem}
        </Text>
      </View>
      <Text className="text-left text-gray-500 mb-4 px-1">
        Pick 2 and 3 flavors of your choice! Mix happiness into your cone and
        enjoy a new combo every time!
      </Text>

      {/* เลือก Scoop */}
      <View className="flex-row justify-between mb-6 px-2">
        {[1, 2, 3].map((num) => (
          <TouchableOpacity
            key={num}
            onPress={() => setScoopLimit(num)}
            className={`px-4 py-3 rounded-xl border w-[30%] items-center ${
              scoopLimit === num
                ? "bg-purple-200 border-purple-400"
                : "border-gray-300"
            }`}
          >
            <Text className="text-center font-medium">{num} Scoop</Text>
            <Text className="text-sm text-gray-400">{num * 15}฿</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* รสชาติ */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <Text className="text-lg font-semibold text-gray-800 mb-3">
          Flavour (Choose {scoopLimit})
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {flavourCounts.map((flavour) => (
            <TouchableOpacity
              key={flavour.id}
              onPress={() => toggleFlavour(flavour.id)}
              className={`w-[30%] ${
                selectedFlavours.includes(flavour.id)
                  ? "bg-purple-100"
                  : "bg-gray-100"
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

      {/* ท้อปปิ้ง */}
      <View className="bg-white p-4 rounded-xl shadow-sm mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-semibold text-gray-800">Topping (Choose up to 2 toppings)</Text>
          <View className="items-center mb-3">
          </View>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {toppingCounts.map((topping) => (
            <TouchableOpacity
              key={topping.id}
              onPress={() => toggleTopping(topping.id)}
              className={`w-[30%] ${
                selectedToppings.includes(topping.id)
                  ? "bg-purple-100"
                  : "bg-gray-100"
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

export default MyChoice;