import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, SplashScreen } from 'expo-router'
// import { useFonts } from 'expo-font'
import { useEffect, useState} from 'react'
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

// SplashScreen.preventAutoHideAsync()
import { NativeWindStyleSheet } from "nativewind";

//this snipet is a fix for nativewind styles not applying to the web version
NativeWindStyleSheet.setOutput({
  default: "native",
});


const RootLayout = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // const [fontsLoaded, error] = useFonts({
  //   'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
  //   'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  //   'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  //   'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  //   'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  //   'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  //   'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  //   'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  //   'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  // })

  // useEffect(() => {
  //   if(error) throw error;
  //   if(fontsLoaded) {
  //     SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded, error])

  // if(!fontsLoaded && !error) return null

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />
      <Stack.Screen name='(tabs)' options={{headerShown: false}} />

    </Stack>


  )
}

export default RootLayout

const styles = StyleSheet.create({})
