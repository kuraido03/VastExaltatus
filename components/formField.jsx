import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-500 font-rmedium">{title}</Text>

      <View className="border-2 border-yellow-600 w-full h-16 px-4 bg-transparent rounded-2xl flex-row items-center">
        <TextInput
          className="flex-1 text-black font-rsemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              style={{ width: 24, height: 24, resizeMode: 'contain', tintColor: 'gray'  }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
