//@ts-nocheck
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  isPassword?: boolean;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  isPassword = false,
  ...props
}: FormFieldProps ) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>

      <View className="w-full h-16 px-4 bg-gray-900 rounded-2xl border-2 border-gray-800 focus:border-purple-200  flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-semibold text-base focus:border-black"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
