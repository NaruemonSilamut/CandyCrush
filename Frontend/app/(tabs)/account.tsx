import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/(Screen)/LoadingScreen");
  };

  const handleBack = () => {
    router.push("/(tabs)/home");
  };

  const handleEdit = () => {
    router.push("/(Screen)/editProfile");
  };

  return (
    <View className="flex-1 bg-white pt-12 px-6">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl ml-2 ">Profile</Text>
      </View>

      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            className="w-14 h-14 rounded-full mr-4"
          />
          <View>
            <Text className="text-base font-bold">Naveen Prasath</Text>
            <Text className="text-sm text-gray-400">fullname@mail.com</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleEdit} className="p-2">
          <Feather name="edit-2" size={18} color="#5b21b6" />
        </TouchableOpacity>
      </View>

      <View className="border-b border-gray-200 mb-10" />

      <View className="mt-auto mb-6 items-center space-y-3">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home")}
          className="bg-purple-300 py-4 px-4 rounded-full w-[140px] self-center mb-6 "
        >
          <Text className="text-white text-center text-lg font-bold">Logout</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};

export default ProfileScreen;