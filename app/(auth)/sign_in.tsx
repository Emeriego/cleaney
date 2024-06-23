//@ts-nocheck
import { Text, View, Image, ScrollView, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { images } from '../../constants'
import { FormField, CustomButton} from '../../components'
import { useState } from 'react'
// import Loader from '../../components'
import {Link, router} from 'expo-router'
// import { useGlobalContext } from "../../context/GlobalProvider";

import React from 'react'

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [user, setUser] = useState({})

  const submit = async () => {
    // if (form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }

    setSubmitting(true);

    try {
      // await signIn(form.email, form.password);
      const result = {id: 1, username: "Jamey", email: "jamey@gmail.com"};
      // setUser(result);
      // setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-black h-full">
    <ScrollView>
      <View
        className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
          // minHeight: "100vh"
        }}
      >
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[34px]"
        />

        <Text className="text-2xl font-semibold text-white mt-10 font-semibold">
          Log in to Cleaney
        </Text>

        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-4"
          keyboardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-4"
          isPassword = {true}
        />

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-regular">
            Don't have an account?
          </Text>
          <Link
            href="/sign_up"
            className="text-lg font-semibold text-white underline"
          >
            Signup
          </Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignIn

// const styles = StyleSheet.create({})
