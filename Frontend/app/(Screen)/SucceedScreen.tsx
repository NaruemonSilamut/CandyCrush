import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const SucceedScreen = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/(tabs)/home")
  }

  const handleTrackOrder = () => {
    router.push("/(Screen)/ReviewScreen")
  }

  return (
    <View className="bg-white flex-1 justify-center items-center px-6 ">
      <Image source={require('../../assets/images/suc.png')}
      resizeMode="cover"
      className="w-48 h-44 mb-4"
      />
      <Text className="text-2xl font-bold mb-4">Yeayy!!</Text>
      <Text className="text-lg font-bold mb-4">Your Transaction was successful</Text>
      <Text className="text-lg text-slate-500 mb-4">name shop takes your order</Text>

      <TouchableOpacity onPress={handleTrackOrder} className="bg-purple-400 py-3 rounded-2xl w-4/5 mx-auto mb-2 mt-4">
        <Text className="text-lg font-bold text-white text-center">Track Order</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBack}>
        <Text className="text-base font-boldtext-center mt-5"> Back to home </Text>
      </TouchableOpacity>

    </View>
  )
}

export default SucceedScreen;
