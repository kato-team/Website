//Button.tsx
import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'glass';
}

export default function Button({ title, onPress, icon, variant = 'primary' }: ButtonProps) {
  const primaryGradient: [string, string] = ['#09a3da', '#285fd8'];
  
  return (
    <View className="w-full mb-4">
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.95 : 1 }] }
        ]}
      >
        <LinearGradient
          colors={variant === 'primary' ? primaryGradient : ['#FFFFFF', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.button,
            variant === 'glass' && styles.glassButton
          ]}
          className="flex-row items-center justify-center px-6 py-4"
        >
          {icon && (
            <View className="mr-3">
              {icon}
            </View>
          )}
          
          <Text 
            className={`text-center text-[17px] font-bold ${
              variant === 'primary' ? 'text-white' : 'text-[#1C1C1E]'
            }`}
          >
            {title}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // AlertModal jaisi exact shadow - deep aur smooth
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  glassButton: {
    // White button ke liye halki shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});