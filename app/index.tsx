import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Link, SplashScreen } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font'


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }

  return (
    <View className="flex-1 items-center p-6">
      <StatusBar style="auto" />
      <View className='flex-1 justify-center max-w-[960] mx-auto'>
        <Text className='text-3xl font-pblack'>Hello! I'm Aora</Text>
        <Text className='text-xl'>This is the first page of your app.</Text>
        <Link href={"/home"} className='bg-green-700 text-white py-1.5 text-center text-xl'>
          Go to Home
        </Link>
      </View>
    </View>
  );
}

