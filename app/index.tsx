//@ts-nocheck
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router'
import { images } from '../constants'
import Btn from '@/components/Btn';
import CustomButton from '@/components/CustomButton';
import { router, Redirect } from 'expo-router';
// import { tailwind } from 'tailwindcss-react-native';

export default function App() {
  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='items-center justify-start w-full h-full px-4 min-h-[85vh]'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl color-white font-bold text-center'>
              Get Productive today with <Text className='text-4xl text-blue-500'>Cleaney!</Text>
            </Text>
          </View>
          <View >

            {/* <Image
            source={images.path}
            className='absolute w-[136px] h-[15px] -bottom-2 -right-8'
            /> */}
            <Text className="text-sm self-center max-w-[80%] text-gray-100 mt-4 text-center">
              Here we give you access to that sparkling lifestyle you have always wanted, at affordable rate
            </Text>

            <Btn
              title={"Get Started"}
              onPress={() => router.push('/sign_in') }
              type={"primary"}
            />
            {/* <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            containerStyles="w-full mt-7"
          /> */}
          </View>
          <StatusBar style="auto" />
        </View>
        {/* <Link href='/home' className='bg-blue-400' style={{ color: "blue" }}>Home</Link> */}
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({ 
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
