//@ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import {router, usePathname} from 'expo-router'
import { icons } from '@/constants'


const imgSearchInput = ({initialQuery}) => {
    const [img, setImg] = useState(initialQuery || '')
    const pathname = usePathname()

    const handleSearch = () =>{
        if (pathname.startsWith("/img")) router.setParams({ img });
        else {
            router.push(`/search/img/${img}`)
        }
    }

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black rounded-2xl border-2 border-black-200 focus:border-secondary">
    <TextInput
      className="text-base mt-0.5 text-white flex-1 font-pregular"
      value={img}
      placeholder="Search an Image"
      placeholderTextColor="#CDCDE0"
      onChangeText={(e) => setImg(e)}
    />

    <TouchableOpacity
      onPress={() => handleSearch()}
    >
      <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
    </TouchableOpacity>
  </View>
  )
}

export default imgSearchInput

const styles = StyleSheet.create({})
