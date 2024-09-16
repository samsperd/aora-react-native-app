import { View, Text, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';

import {icons} from '../../constants';

interface TabIconProps {
  icon: ImageSourcePropType;
  name: string;
  focused: boolean;
  color: string;
}

const TabIcon = ({ color, icon, name, focused}: TabIconProps) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-5 h-5' />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular' } text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84
        }
      }}>
        <Tabs.Screen name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused
          }) => (
            <TabIcon
              icon={icons.home}
              focused={focused}
              color={color}
              name={"Home"}
            />
          )
        }} />
        <Tabs.Screen name='create'
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused
          }) => (
            <TabIcon
              icon={icons.plus}
              focused={focused}
              color={color}
              name={"Create"}
            />
          )
        }} />
        <Tabs.Screen name='bookmark'
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused
          }) => (
            <TabIcon
              icon={icons.bookmark}
              focused={focused}
              color={color}
              name={"Bookmark"}
            />
          )
        }} />
        <Tabs.Screen name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({
            color,
            focused
          }) => (
            <TabIcon
              icon={icons.profile}
              focused={focused}
              color={color}
              name={"Profile"}
            />
          )
        }} />
      </Tabs>
      </>
  )
}

export default TabsLayout