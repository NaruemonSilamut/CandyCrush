import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";

interface CardProp {
  id: string;
  name: string;
  price: number;
  image: any;
  onPress?: () => void;
  scale?: Animated.AnimatedInterpolation<number>;
}

const ITEM_WIDTH = 190;

const ProductCard: React.FC<CardProp> = ({ id, name, price, image, onPress, scale }) => {
  const Container = scale ? Animated.View : View;
  const containerStyle = scale
    ? {
        width: ITEM_WIDTH,
        transform: [{ scale }],
        marginRight: 16,
      }
    : {
        width: ITEM_WIDTH,
        marginRight: 16,
      };

  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={containerStyle}>
        <View className="bg-white rounded-2xl shadow px-4 py-4 w-full mt-2 mb-8  items-center left-2 ">
          <Image
            source={image}
            style={{ width: "100%", height: 150, borderRadius: 10 }}
            resizeMode="contain"
          />
          <Text className="font-bold text-center text-sm mb-1 mt-1">{name}</Text>
          <Text className="text-cyan-800 text-center font-medium text-ml">{price} ฿</Text>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default ProductCard;
