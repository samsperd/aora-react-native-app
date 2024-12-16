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

const TabIcon = ({ color, icon, name, focused }: TabIconProps) => {
  return (
    <View className="flex-1 justify-center items-center gap-1 w-full h-full" >
      <Image 
        source={icon} 
        resizeMode="contain" 
        tintColor={color} 
        style={{ width: 20, height: 20 }} 
      />
      <Text 
        className={`${focused ? 'font-semibold' : 'font-regular' } text-xs`} 
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 90,
            justifyContent: 'center',
          },

          tabBarIconStyle: {
            flex: 1,
            width: '100%',
            height: '100%'
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                focused={focused}
                color={color}
                name="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                focused={focused}
                color={color}
                name="Create"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                focused={focused}
                color={color}
                name="Bookmark"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                focused={focused}
                color={color}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
