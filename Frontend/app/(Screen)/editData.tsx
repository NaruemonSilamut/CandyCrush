import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons";

const editData = () => {
  return (
    <View className="flex-1 bg-white pt-12 px-6">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl ml-2">Edit Data</Text>
      </View>

      <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4">
        <FontAwesome name="user" size={20} color="black" />
        <TextInput
          className="flex-1 ml-2 py-3 text-gray-800"
          placeholder="Name"
          keyboardType="default"
        />
      </View>

      <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4">
        <MaterialIcons name="email" size={20} color="black" />
        <TextInput
          className="flex-1 ml-2 py-3 text-gray-800"
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity className="bg-purple-400 py-3 rounded-lg w-full mx-auto mb-2 mt-4">
        <Text className="text-white text-center font-semibold text-lg ">
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default editData;
