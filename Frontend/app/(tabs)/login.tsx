import { View, Text, TextInput, TouchableOpacity,   } from 'react-native'
import { Eye, Mail, Lock } from 'lucide-react-native';
import React from 'react'

const login = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#E5D8FF] px-6">
      <View className="bg-white w-full rounded-2xl p-6 shadow-lg">
        <Text className="text-center text-2xl font-bold mb-6">Login</Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 mb-4">
          <Mail className="text-gray-500" size={20} />
          <TextInput
            className="flex-1 ml-2 py-3 text-gray-800"
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 mb-2">
          <Lock className="text-gray-500" size={20} />
          <TextInput
            className="flex-1 ml-2 py-3 text-gray-800"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Eye className="text-gray-500" size={20} />
        </View>

        <Text className="text-right text-sm text-gray-600 mb-6">Forget Password?</Text>

        <TouchableOpacity className="bg-purple-600 py-3 rounded-lg">
          <Text className="text-white text-center font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-gray-600 mt-4">Don't have an account?</Text>
      <TouchableOpacity className="mt-2">
        <Text className="text-pink-400 font-bold">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default login