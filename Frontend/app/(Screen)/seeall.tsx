import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import images from "../constant/images";

const items = [
  {
    name: "Mocha Lava Crunch",
    price: "120",
    souce:images.mocha,
    screen: "/productDetail7" // หน้าเชื่อมต่อ
  },
  {
    name: "Choco Swirl Dream",
    price: "130",
    souce:images.choco,
    screen: "/productDetail4" // หน้าเชื่อมต่อ
  },
  {
    name: "Black Berry ",
    price: "140",
    souce:images.black,
    screen: "/productDetail8" // หน้าเชื่อมต่อ
  },
  {
    name: "Sakura Swirl",
    price: "130",
    souce: images.sakura,
    screen: "/productDetail9" // หน้าเชื่อมต่อ
  },
  {
    name: "Rainbow Surprise",
    price: "150",
    souce: images.rainbow,
    screen: "/productDetail3" // หน้าเชื่อมต่อ
  },
  {
    name: "Cotton Snow",
    price: "130",
    souce : images.cotton,
    screen: "/productDetail10" // หน้าเชื่อมต่อ
  },
  {
    name: "Strawberry Blush",
    price: "120",
    souce: images.strawberry,
    screen: "/(Screen)/" // หน้าเชื่อมต่อ
  },
  {
    name: "Pick & Mix",
    price: "100",
    souce: images.mix,
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
