import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const EditProfile = () => {

  const router = useRouter(); // ใช้สำหรับย้อนกลับ
  const [name, setName] = useState("Naveen Prasath");
  const [email, setEmail] = useState("test@email.com");
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/men/75.jpg");

  // ฟังก์ชันเลือกภาพโปรไฟล์
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);  // เปลี่ยน URL ของรูปโปรไฟล์
    }
  };

  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = () => {
    console.log("Saved:", name, email, profileImage);
    // ส่งข้อมูลไปยัง backend หรือทำการอัพเดต
  };

  return (
    <View className="flex-1 bg-[#f9f9f9] items-center pt-10 px-6">
      <View className="w-full flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ml-3">Edit Profile</Text>
      </View>

      <View className="relative mb-6">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          className="w-28 h-28 rounded-full"
        />
        <TouchableOpacity 
          onPress={pickImage} 
          className="absolute bottom-1 right-1 bg-white p-1 rounded-full"
        >
          <Feather name="edit-2" size={16} color="#6c63ff" />
        </TouchableOpacity>
      </View>

      <View className="w-full mb-4 bg-gray-100 rounded-lg flex-row items-center px-4 py-3">
        <AntDesign name="user" size={20} color="black" />
        <TextInput
          className="ml-3 flex-1 font-semibold"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View className="w-full mb-6 bg-gray-100 rounded-lg flex-row items-center px-4 py-3">
        <AntDesign name="mail" size={20} color="black" />
        <TextInput
          className="ml-3 flex-1 font-semibold"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        className="bg-[#cfc9ff] py-4 px-6 rounded-full w-full"
        onPress={handleSave}
      >
        <Text className="text-center text-white font-semibold">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;


