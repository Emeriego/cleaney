//@ts-nocheck
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ImgSearchInput from '@/components/imgSearchInput'

const Create = () => {
  return (
    <SafeAreaView className="bg-black h-full text-white">
      <Text>Create</Text>
      <ImgSearchInput  />

    </SafeAreaView>
  )
}

export default Create
