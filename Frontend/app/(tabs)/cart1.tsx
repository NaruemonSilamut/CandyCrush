import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import images from "@/app/constant/images";

// Master Data
const items = [
  { id: "1", name: "Mocha Lava Crunch", price: 120, image: images.mocha },
  { id: "2", name: "Choco Swirl Dream", price: 150, image: images.choco },
  { id: "3", name: "Black Berry", price: 130, image: images.BlackBerry },
  { id: "4", name: "Sakura Swirl", price: 120, image: images.sakura },
  { id: "5", name: "Rainbow Surprise", price: 130, image: images.rainbow },
  { id: "6", name: "Cotton Snow", price: 130, image: images.cotton },
  { id: "7", name: "Strawberry Blush", price: 130, image: images.strawberry },
  { id: "8", name: "Honey Pistachio Bliss", price: 100, image: images.honey },
  { id: "9", name: "Cookie Monster Delite", price: 100, image: images.cookie },
  { id: "10", name: "Pick & Mix", price: 100, image: images.mix },
];

const flavourCounts = [
  { id: "1", name: "Matcha", image: images.matchaScoop },
  { id: "2", name: "Strawberry", image: images.strawberryScoop },
  { id: "3", name: "Creamy Berry", image: images.berryScoop },
  { id: "4", name: "Apple Cranberry", image: images.appleScoop },
  { id: "5", name: "Chocolate", image: images.chocolateScoop },
  { id: "6", name: "Pistachio", image: images.pitacchioScoop },
];

const toppingCounts = [
  { id: "1", name: "Sprinkles", price: 15, image: images.rainbowTopping },
  { id: "2", name: "Cherries", price: 15, image: images.cherryTopping },
  { id: "3", name: "Strawberry", price: 15, image: images.strawberryTopping },
  { id: "4", name: "Whipped Cream", price: 15, image: images.creamTopping },
  { id: "5", name: "Candy Gems", price: 15, image: images.candyTopping },
  { id: "6", name: "Almonds", price: 15, image: images.almondTopping },
];

// Mock จาก backend
const mockCartFromBackend = [
  {
    productId: "1",
    quantity: 2,
    scoop: 1,
    flavourId: "2",
    toppingIds: ["1", "6"],
  },
  {
    productId: "4",
    quantity: 1,
    scoop: 2,
    flavourId: "5",
    toppingIds: ["3", "4"],
  },
  { productId: "9", quantity: 3, scoop: 2, flavourId: "6", toppingIds: [] },
];

export default function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const mapped = mockCartFromBackend.map((item) => {
      const product = items.find((i) => i.id === item.productId);
      const flavour = flavourCounts.find((f) => f.id === item.flavourId);
      const toppings = toppingCounts.filter((t) =>
        item.toppingIds.includes(t.id)
      );
      const scoopPrice = item.scoop === 2 ? 30 : 15;
      return { ...item, ...product, flavour, toppings, scoopPrice };
    });
    setCartItems(mapped);
  }, []);

  const handleIncrement = (index: number) => {
    const updated = [...cartItems];
    updated[index].quantity++;
    setCartItems(updated);
  };

  const handleDecrement = (index: number) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity--;
      setCartItems(updated);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const toppingTotal = item.toppings.reduce(
      (tSum: number, t: any) => tSum + (t.price || 0),
      0
    );
    return sum + (item.price + item.scoopPrice + toppingTotal) * item.quantity;
  }, 0);

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-14">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#555" />
        </TouchableOpacity>
        <Text className="text-2xl font-medium text-[#3a2c2c] mt-2">
          My Cart
        </Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <View className="p-1 rounded-full">
            <AntDesign name="closecircle" size={24} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <View
          key={index}
          className="bg-white rounded-2xl p-10 mb-6 shadow-sm relative flex-row justify-between items-start"
        >
          {/* ❌ Remove */}
          <TouchableOpacity
            className="absolute top-3 right-2 z-10"
            onPress={() => handleRemoveItem(index)}
          >
            <AntDesign name="close" size={20} color="gray" />
          </TouchableOpacity>

          {/* Image + Qty */}
          <View className="w-[20%] items-center">
            <Image
              source={item.image}
              className="w-20 h-20 rounded-full mb-3 border"
              resizeMode="contain"
            />

            {/* Quantity Control */}
            <View className="flex-row items-center justify-between bg-gray-100 px-3 py-1 rounded-full">
              {/* Decrement */}
              <TouchableOpacity
                className="w-8 h-8 items-center justify-center"
                onPress={() => handleDecrement(index)}
              >
                <Text className="text-lg font-bold">-</Text>
              </TouchableOpacity>

              {/* Quantity Text */}
              <Text className="text-md font-bold mx-2">{item.quantity}</Text>

              {/* Increment */}
              <TouchableOpacity
                className="w-8 h-8 items-center justify-center"
                onPress={() => handleIncrement(index)}
              >
                <Text className="text-lg font-bold">+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Detail */}
          <View className="w-[68%]">
            <View className="flex-row justify-between mb-2">
              <Text className="font-semibold text-base text-gray-800 ">
                {item.name}
              </Text>
              <Text className="font-bold text-gray-700 left-5">
                ฿{item.price}
              </Text>
            </View>
            <Text className="text-sm text-gray-600 mb-1">
              Scoop: {item.scoop} (฿{item.scoopPrice})
            </Text>
            <Text className="text-sm text-gray-600 mb-1">
              Flavour: {item.flavour?.name}
            </Text>

            {item.toppings?.map((top: any, i: number) => (
              <Text key={i} className="text-sm text-gray-500">
                + {top.name} (฿{top.price})
              </Text>
            ))}
            <TouchableOpacity
              className="mt-2"
              onPress={() =>
                router.push({
                  pathname: "/property/[id]",
                  params: {
                    id: item.id, // Add the required 'id' property
                    productId: item.id,
                    scoop: item.scoop.toString(),
                    flavourId: item.flavourId,
                    toppingIds: item.toppingIds.join(","),
                  },
                })
              }
            >
              <Text className="text-purple-500 font-medium text-sm">
                ✏️ Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Subtotal */}
      <View className="flex-row justify-between items-center px-1 mt-2 mb-4">
        <Text className="text-base text-gray-600 font-semibold">Subtotal</Text>
        <Text className="text-base text-gray-800 font-semibold">
          ฿{subtotal}
        </Text>
      </View>

      {/* Checkout */}
      <TouchableOpacity
        className="bg-purple-300 py-3 px-4 rounded-full w-[150px] self-center mb-6"
        onPress={() => router.push("/(Screen)/checkout")}
      >
        <Text className="text-white text-center text-lg font-bold">
          Checkout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
