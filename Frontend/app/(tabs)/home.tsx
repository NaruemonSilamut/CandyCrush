import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 180;

export default function HomeScreen() {
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;

  const featuredItems = [
    {
      name: "Strawberry Blush",
      price: 120,
      image: require("../../assets/images/1.png.png"),
      screen: "/productDetail", // หน้าเชื่อมต่อ
    },
    {
      name: "Rainbow Surprise",
      price: 150,
      image: require("../../assets/images/2.png.png"),
      screen: "/productDetail3", // หน้าเชื่อมต่อ
    },
    {
      name: "Choco Swirl Dream",
      price: 130,
      image: require("../../assets/images/3.png.png"),
      screen: "/productDetail4", // หน้าเชื่อมต่อ
    },
  ];

  const menuItems = [
    {
      name: "Honey Pistachio Bliss",
      price: 120,
      image: require("../../assets/images/9.png"),
      screen: "/productDetail5", // หน้าเชื่อมต่อ
    },
    {
      name: "Cookie Monster Delight",
      price: 130,
      image: require("../../assets/images/10.png"),
      screen: "/productDetail6", // หน้าเชื่อมต่อ
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-2 pt-14">
      {/* Header */}
      <View className="flex-row justify-center items-center mb-6 font-right relative mt-6 mx-1">
        <Text className="text-xl font-bold text-gray-800 text-center">
          CANDY CRUSH
        </Text>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
          }}
          className="w-10 h-10 rounded-full absolute right-4"
        />
      </View>

      {/* Search */}
      <View className="bg-white flex-row items-center px-8 py-4 rounded-full shadow mb-4 mt-2">
        <Text className="text-amber-950 mr-4">🔍</Text>
        <TextInput
          placeholder="What are u looking for ?"
          placeholderTextColor="black"
          className="flex-1 text-base text-black"
        />
      </View>

      {/* Banner */}
      <Image
        source={require("../../assets/images/PastelPink.png")}
        className="h-28 w-full rounded-xl mb-3 mt-3 shadow-sm"
        resizeMode="cover"
      />

      {/* Featured */}
      <Text className="text-left text-gray-800 font-semibold mt-6 left-2">
        FEATURED
      </Text>
      <Animated.FlatList
        data={featuredItems}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + 16}
        decelerationRate={0.9}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_WIDTH) / 2,
          paddingTop: 16,
          paddingBottom: 60,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (ITEM_WIDTH + 16),
            index * (ITEM_WIDTH + 16),
            (index + 1) * (ITEM_WIDTH + 16),
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1.1, 0.9],
            extrapolate: "clamp",
          });

          return (
            <TouchableOpacity onPress={() => router.push(item.screen)}>
              {/* Animated Card */}
              <Animated.View
                style={{
                  width: ITEM_WIDTH,
                  transform: [{ scale }],
                  marginRight: 16,
                }}
              >
                <View className="bg-white rounded-2xl shadow px-4 py-8 w-full mt-6 items-center">
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: 160 }}
                    resizeMode="contain"
                  />
                  <Text className="text-center font-semibold text-sm mb-2">
                    {item.name}
                  </Text>
                  <Text className="text-cyan-800 text-ml">{item.price} ฿</Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Menu */}
      <View className="flex-row justify-between items-center px-1">
        <Text className="text-gray-800 font-semibold text-lg left-2 mb-1">
          MENU
        </Text>
        <TouchableOpacity onPress={() => router.push("/seeall")}>
          <Text className="text-cyan-800  font-medium right-2 mb-1">
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-15 mt-4"
      >
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.screen)} // Navigate to respective screen
          >
            <View className="bg-white rounded-2xl shadow mr-6 px-4 py-4 w-[190px] mt-1 mb-10 items-center relative left-2">
              <Image
                source={item.image}
                style={{ width: "100%", height: 160 }}
                resizeMode="contain"
              />
              <Text className="font-bold text-center text-sm mb-2">
                {item.name}
              </Text>
              <Text className="text-cyan-800 text-center font-medium text-ml">
                {item.price} ฿
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
