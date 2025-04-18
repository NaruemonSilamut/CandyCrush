import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'

const productDetail = () => {
    const router = useRouter()
    const { id } =  useLocalSearchParams() // get the id from the url

  return (
    <View>
      <Text>this is {id} </Text>
    </View>
  )
}

export default productDetail