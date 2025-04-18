import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const items = [
  {
    name: "Mocha Lava Crunch",
    price: "120",
    image: require("../../assets/images/8.png.png"),
    screen: "/productDetail7" // หน้าเชื่อมต่อ
  },
  {
    name: "Choco Swirl Dream",
    price: "130",
    image: require("../../assets/images/3.png.png"),
    screen: "/productDetail4" // หน้าเชื่อมต่อ
  },
  {
    name: "Black Berry ",
    price: "140",
    image: require("../../assets/images/7.png"),
    screen: "/productDetail8" // หน้าเชื่อมต่อ
  },
  {
    name: "Sakura Swirl",
    price: "130",
    image: require("../../assets/images/5.png.png"),
    screen: "/productDetail9" // หน้าเชื่อมต่อ
  },
  {
    name: "Rainbow Surprise",
    price: "150",
    image: require("../../assets/images/2.png.png"),
    screen: "/productDetail3" // หน้าเชื่อมต่อ
  },
  {
    name: "Cotton Snow",
    price: "130",
    image: require("../../assets/images/4.png.png"),
    screen: "/productDetail10" // หน้าเชื่อมต่อ
  },
  {
    name: "Strawberry Blush",
    price: "120",
    image: require("../../assets/images/1.png.png"),
    screen: "/(Screen)/" // หน้าเชื่อมต่อ
  },
  {
    name: "Pick & Mix",
    price: "100",
    image: require("../../assets/images/6.png.png"),
    screen: "/productDetail2" // หน้าเชื่อมต่อ
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
            onPress={() => router.push(item.screen)} // เชื่อมไปหน้ารายละเอียดของแต่ละเมนู
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
