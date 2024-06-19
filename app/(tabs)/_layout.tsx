//@ts-nocheck
import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import { icons } from '../../constants'
// import { tailwind } from 'tailwindcss-react-native'

interface TabIconProps {
  icon: any;
  label: string;
  color: string;
  focused: boolean;
}

const TabIcon = ({ icon, label, color, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2 mt-1">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
    <Text className={`text-xs ${focused ? "text-bold" : "text-light"} gap-2`} style={{color: color}}>{label}</Text>
    </View>
  )

}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 60,
            paddingBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={
            {
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.home}
                  label="Home"
                  color={color}
                  focused={focused}
                />)
            }
          }
        />
        <Tabs.Screen
          name="bookmark"
          options={
            {
              title: 'Bookmark',
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.bookmark}
                  label="Bookmark"
                  color={color}
                  focused={focused}
                />)
            }
          }
        />
        <Tabs.Screen
          name="create"
          options={
            {
              title: 'Create',
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.plus}
                  label="Create"
                  color={color}
                  focused={focused}
                />)
            }
          }
        />
        <Tabs.Screen
          name="profile"
          options={
            {
              title: 'Profile',
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.profile}
                  label="Profile"
                  color={color}
                  focused={focused}
                />)
            }
          }
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})
