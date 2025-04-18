import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Dimensions, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import images from "../constant/images";  // Import images from the constant folder
import ProductCard from "../components/productCard";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = 180;

export default function HomeScreen() {
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;

  const featuredItems = [
    { iceCreamId: "1", name: "Mocha Lava Crunch", price: 120, image: images.strawberry, },
    { iceCreamId: "2", name: "Choco Swirl Dream", price: 150, image: images.choco, },
    { iceCreamId: "3", name: "Black Berry", price: 130, image: images.BlackBerry, },
  ];
  const goToProductDetails = (id: string) => {
    router.push(`/(Screen)/property/${id}`)
  }
  const menuItems = [
    { iceCreamId: "4", name: "Sakura Swirl", price: 120, image: images.sakura, },
    { iceCreamId: "5", name: "Rainbow Surprise", price: 130, image: images.rainbow, },
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
            <TouchableOpacity onPress={() => goToProductDetails(item.iceCreamId)}>
              <Animated.View
                style={{
                  width: ITEM_WIDTH,
                  transform: [{ scale }],
                  marginRight: 16,
                }}
              >
                <View className="bg-white rounded-2xl shadow px-4 py-8 w-full mt-6 items-center">
                  <Image
                    source={item.image}  // Use the image from images.ts
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
        <TouchableOpacity onPress={() => router.push("/(Screen)/seeall")}>
          <Text className="text-cyan-800 font-medium right-2 mb-1">
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-15 mt-4">
        {menuItems.map((item, index) => (
          <ProductCard id={item.iceCreamId} name={item.name} price={item.price} image={item.image} onPress={() => goToProductDetails(item.iceCreamId)} />

        ))}
      </ScrollView>
    </ScrollView>
  );
}
