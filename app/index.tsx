import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Link, router, SplashScreen } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from './components/CustomButton';
import 'react-native-url-polyfill/auto'


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
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possiblities with {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image source={images.path} className='w-[135px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of timeless explanation with Aora.
          </Text>

          <CustomButton title='Continue with Email' handlePress={() => router.push('/sign-in')} containerStyles='w-full mt-7' />
          {/* <CustomButton title='Open Tabs' handlePress={() => router.push('/home')} containerStyles='w-full mt-7' /> */}
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

