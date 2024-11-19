import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/customButton';
import { useGlobalContext } from '../context/GlobalProvider';


export default function App(){
  const {isLoading, isLoggedIn} = useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center h-[85vh] pt-4">
        <Image
          source={images.logo}
          className="w-[300px] h-[230px]"
          resizeMode = "contain"
          object-position="top"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-yellow-600 font-rmediumItalic text-center">Discover your passion, Shape your Future</Text>
          </View>

        <CustomButton
          title="Continue with Email"
          handlePress={()=> router.push('/sign-in')}
          containerStyles="w-full mt-50"
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


