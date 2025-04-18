import React from "react"
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

interface CardProp {
    id:string;
    name:string;
    price:number
    image:any;
    onPress?:()=>void;
}

const ProductCard: React.FC<CardProp>= ({id, name, price, image, onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View className="bg-white rounded-2xl shadow mr-6 px-4 py-4 w-[190px] mt-1 mb-10 items-center relative left-2">
                <Image
                    source={image} 
                    style={{ width: "100%", height: 160, borderRadius: 10 }}
                    resizeMode="contain"
                />
                <Text className="font-bold text-center text-sm mb-2">{name}</Text>
                <Text className="text-cyan-800 text-center font-medium text-ml">{price} ฿</Text>
            </View>
        </TouchableOpacity>
    );
};
export default ProductCard