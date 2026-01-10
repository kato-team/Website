import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  isTextArea?: boolean;
}

export default function InputField({ label, isTextArea, ...props }: InputFieldProps) {
  return (
    <View className="mb-5">
      <Text className="text-[#1C1C1E] text-[15px] font-bold mb-3 ml-1">
        {label}
      </Text>
      
      <View 
        style={styles.inputShadow}
        className="bg-white rounded-2xl w-full"
      >
        <TextInput
          className={`p-4 text-[#1C1C1E] text-[16px] font-medium ${isTextArea ? 'h-32 text-top' : 'h-[56px]'}`}
          placeholderTextColor="#A0A0A0"
          multiline={isTextArea}
          textAlignVertical={isTextArea ? 'top' : 'center'}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputShadow: {
    // Ye wahi soft shadow hai jo aapne maangi thi
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});