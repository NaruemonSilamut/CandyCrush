import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
   const router = useRouter();
   const handledLogin = () => {
          router.push("/(Screen)/login");
    }
    const handlebBack = () => {
      //@ts-ignore
      router.push("/(tabs)/home");
    };
  return (
    <View className="flex-1 bg-white pt-12 px-6">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl ml-2">Profile</Text>
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

        <TouchableOpacity className='mr-2'>
          <Feather name="edit-2" size={18} color="#5b21b6" />
        </TouchableOpacity>
      </View>

      <View className="space-y-6">
        <View className="border-b border-gray-200" />
      </View>

      <View className="mt-auto mb-6 items-center">
        <TouchableOpacity onPress={handledLogin} className="bg-purple-300 px-10 py-4 rounded-2xl w-full">
          <Text className="text-white font-semibold text-center">Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlebBack}>
        <Text className="text-black text-center font-bold text-base mt-2">
          Back to home
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
