import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import images from "../constant/images";
import ProductCard from "../components/productCard";

const items = [
  { iceCreamId: "1", name: "Mocha Lava Crunch", price: 120, image: images.mocha, },
  { iceCreamId: "2", name: "Choco Swirl Dream", price: 150, image: images.choco, },
  { iceCreamId: "3", name: "Black Berry", price: 130, image: images.BlackBerry, },
  { iceCreamId: "4", name: "Sakura Swirl", price: 120, image: images.sakura, },
  { iceCreamId: "5", name: "Rainbow Surprise", price: 130, image: images.rainbow, },
  { iceCreamId: "6", name: "Cotton Snow", price: 130, image: images.cotton, },
  { iceCreamId: "7", name: "Strawberry Blush", price: 120, image: images.strawberry, },
  { iceCreamId: "8", name: "Honey Pistachio Bliss", price: 100, image: images.honey, },
  { iceCreamId: "9", name: "Cookie Monster Delite", price: 100, image: images.cookie, },
  { iceCreamId: "10", name: "Pick & Mix", price: 100, image: images.mix, },
];

export default function SeeAllScreen() {
  const router = useRouter();
  const goToProductDetails = (id: string) => {
    if(id ==="10"){
      router.push(`/(Screen)/MyChoice`)
    }else{

      router.push(`/(Screen)/property/${id}`)
    }
  }
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-14">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-6">
        <View className="flex-row items-center">
          <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Grid of Items */}
      <View className="flex-row flex-wrap justify-between">
        {items.map((item) => (
          <TouchableOpacity
            key={item.iceCreamId}
            className="bg-white rounded-2xl shadow-sm w-[47%] mb-8 p-6 mr-1 items-center"
            onPress={() => goToProductDetails(item.iceCreamId)} // เชื่อมไปหน้ารายละเอียดของแต่ละเมนู
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 160, borderRadius: 10 }}
              className="mb-4"
              resizeMode="contain"
            />
            <Text className="text-center font-semibold text-ml mb-1 text-gray-700 ">
              {item.name}
            </Text>
            <Text className="text-cyan-800 font-bold text-center mb-1 text-lg">
              {item.price} ฿
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
