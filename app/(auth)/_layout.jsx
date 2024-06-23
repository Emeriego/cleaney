//@ts-nocheck
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import Loader from '../../components/Loader'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <>
    <Stack>
      <Stack.Screen
        name="sign_in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign_up"
        options={{
          headerShown: false,
        }}
      />
    </Stack>

    <Loader isLoading={loading} />
    <StatusBar backgroundColor="#161622" style="light" />
  </>
  )
}

export default AuthLayout

// const styles = StyleSheet.create({})

