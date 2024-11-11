import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/formField';
import CustomButton from '../../components/customButton';
import { Link, useRouter } from 'expo-router';
import { createUser } from '../../lib/appwrite';


const SignUp = () => {
    const [Form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const submit = async () => {
        if (!Form.username || !Form.email || !Form.password) {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await createUser(Form.email, Form.password, Form.username);

            // Redirect to home on success
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6 items-center">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{ width: 200, height: 150 }}
                    />
                    <Text className="text-2xl text-gray-500 text-semibold mt-10 font-rsemibold">
                        Sign up to Vast
                    </Text>

                    <FormField
                        title="Username"
                        value={Form.username}
                        handleChangeText={(e) => setForm({ ...Form, username: e })}
                        placeholder="Enter your username"
                    />

                    <FormField
                        title="Email"
                        value={Form.email}
                        handleChangeText={(e) => setForm({ ...Form, email: e })}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={Form.password}
                        handleChangeText={(e) => setForm({ ...Form, password: e })}
                        placeholder="Enter your password"
                        secureTextEntry={true} // Add secureTextEntry for password field
                    />

                    <CustomButton
                        title="Sign up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                        href="/home"
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-secondary font-rregular">
                            Already Have an Account
                        </Text>
                        <Link href="/sign-in" className="text-lg text-orange-300 font-rsemibold">
                            Sign-in
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
