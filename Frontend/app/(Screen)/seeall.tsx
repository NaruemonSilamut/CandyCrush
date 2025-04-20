import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import images from "../constant/images";
import ProductCard from "../components/productCard";

const items = [
  { iceCreamId: "1", name: "Mocha Lava Crunch", price: 120, image: images.mocha },
  { iceCreamId: "2", name: "Choco Swirl Dream", price: 150, image: images.choco },
  { iceCreamId: "3", name: "Black Berry", price: 130, image: images.BlackBerry },
  { iceCreamId: "4", name: "Sakura Swirl", price: 120, image: images.sakura },
  { iceCreamId: "5", name: "Rainbow Surprise", price: 130, image: images.rainbow },
  { iceCreamId: "6", name: "Cotton Snow", price: 130, image: images.cotton },
  { iceCreamId: "7", name: "Strawberry Blush", price: 120, image: images.strawberry },
  { iceCreamId: "10", name: "Pick & Mix", price: 100, image: images.mix },
  { iceCreamId: "8", name: "Honey Pistachio Bliss", price: 100, image: images.honey },
  { iceCreamId: "9", name: "Cookie Monster Delite", price: 100, image: images.cookie },
];

export default function SeeAllScreen() {
  const router = useRouter();

  const goToProductDetails = (id: string) => {
    if (id !== "10") {
      // Update to use the correct path for expo-router
      router.push(`/property/${id}`);
    } else {
      router.push("/(Screen)/MyChoice");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-14">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <View className="flex-row items-center">
          <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Grid of Items */}
      <View className="flex-row flex-wrap justify-between">
        {items.map((item, index) => (
          <View
            key={item.iceCreamId}
            className={`w-[49%] ${index % 2 === 0 ? "mb-1" : "mb-1"}`}
          >
            <ProductCard
              id={item.iceCreamId}
              name={item.name}
              price={item.price}
              image={item.image}
              onPress={() => goToProductDetails(item.iceCreamId)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
