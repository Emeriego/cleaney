//@ts-nocheck
import { Text, View, Image, ScrollView, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { images } from '../../constants'
import { FormField, CustomButton} from '../../components'
import { useState } from 'react'
import Loader from '../../components'
import {Link} from 'expo-router'
// import { useGlobalContext } from "../../context/GlobalProvider";


import React from 'react'

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });


  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      // const result = await createUser(form.email, form.password, form.username);
      const result = {id: 1, username: "Jamey", email: "jamey@gmail.com"};
      setUser(result);
      setIsLogged(true);

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
          Sign Up with Cleaney
        </Text>

        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-4"
        />

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
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-8"
          isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-regular">
            Already have an account?
          </Text>
          <Link
            href="/sign_in"
            className="text-lg font-semibold text-purple-200 underline"
          >
            SignIn
          </Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignUp

// const styles = StyleSheet.create({})
