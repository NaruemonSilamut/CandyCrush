import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const items = [
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046750.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046758.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046759.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046760.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046761.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046762.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046763.png",
  },
  {
    name: "Black forest Cake",
    price: "¥1950",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046764.png",
  },
];

export default function SeeAllScreen() {
  const router = useRouter();

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
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-white rounded-2xl shadow-sm w-[47%] mb-8 p-6 mr-1 items-center"
            onPress={() =>
              router.push(index === 7 ? "/productDetail2" : "/productDetail")
            }
          >
            <Image
              source={{ uri: item.image }}
              className="w-24 h-24 mb-3"
              resizeMode="contain"
            />
            <Text className="text-center font-semibold text-sm mb-1 text-gray-700 ">
              {item.name}
            </Text>
            <Text className="text-orange-500 font-bold text-center mb-1 ">
              {item.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
