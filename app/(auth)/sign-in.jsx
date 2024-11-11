import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/formField'
import CustomButton from '../../components/customButton'
import { signIn } from '../../lib/appwrite'
import { useRouter } from 'expo-router' // Make sure to import useRouter


const SignIn = () => {
  const [Form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const router = useRouter()

  const submit = async () => {
    if (!Form.email || !Form.password) {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
    }

    setisSubmitting(true);

    try {
      await signIn(Form.email, Form.password);

        // Redirect to home on success
        router.replace('/home')
    } catch (error) {
        Alert.alert('Error', error.message);
    } finally {
        setisSubmitting(false);
    }
};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6 items-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[200px] h-[150px]"
            object-position="top"
          />
          <Text className="text-2xl text-gray-500 text-semibold mt-10 font-rsemibold">
            Log in to Vast
          </Text>
          <FormField
            title="Email"
            value={Form.email}
            handleChangeText={(e) => setForm({ ...Form, email: e })}
            otherStyles="mt-7"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={Form.password}
            handleChangeText={(e) => setForm({ ...Form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter your password"
            secureTextEntry={true}
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary font-rregular">
              Don't have an account?
            </Text>
            <Text
              className="text-lg text-orange-300 font-rsemibold"
              onPress={() => router.push('/sign-up')}
            >
              Sign-up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
