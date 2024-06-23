//@ts-nocheck
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import ImgSearchInput from "@/components/imgSearchInput";



const ImageSearch = () => {
    const { img_query } = useLocalSearchParams()

    useEffect(()=>{

    }, [img_query])
    return (
        <SafeAreaView className="bg-black h-full text-white pt-[100px]">
            <View>
                <Text className="text-white">
                    {img_query}
                </Text>
            </View>
            <ImgSearchInput initialQuery={img_query} />
        </SafeAreaView>

    )
}
export default ImageSearch;
