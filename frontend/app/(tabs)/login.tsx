// app/(tabs)/login.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import "../../global.css"
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function LoginScreen() {
  const handleGoogleLogin = (): void => {
    console.log('Google Login Pressed');
  };

  const handleMicrosoftLogin = (): void => {
    console.log('Microsoft Login Pressed');
  };

  const handleAppleLogin = (): void => {
    console.log('Apple Login Pressed');
  };

  const handleEmailLogin = (): void => {
    console.log('Email Login Pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="dark" />
      
      <View className="flex-1 px-6 justify-center">
        {/* Logo Circle */}
        <View className="items-center mb-8">
          <View 
            className="w-20 h-20 bg-primary rounded-full items-center justify-center mb-4"
            style={{
              shadowColor: '#007AFF',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Text className="text-4xl font-bold text-white">K</Text>
          </View>
          
          <Text className="text-2xl font-bold text-text-primary font-inter mb-1">
            Kato
          </Text>
          <Text className="text-sm text-text-secondary font-inter">
            Your AI Business Assistant
          </Text>
        </View>

        {/* Login Buttons */}
        <View className="space-y-3">
          {/* Google Button */}
          <Pressable
            onPress={handleGoogleLogin}
            className="flex-row items-center bg-white rounded-xl px-5 py-4 border border-border-medium active:scale-[0.98]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <View className="w-5 h-5 mr-4">
              <Text className="text-base">
                <View className="w-5 h-5 rounded-full bg-[#4285F4] items-center justify-center">
                  <Text className="text-white text-xs font-bold">G</Text>
                </View>
              </Text>
            </View>
            <Text className="flex-1 text-center text-base font-semibold text-text-primary font-inter mr-5">
              Continue with Google
            </Text>
          </Pressable>

          {/* Microsoft Button */}
          <Pressable
            onPress={handleMicrosoftLogin}
            className="flex-row items-center bg-white rounded-xl px-5 py-4 border border-border-medium active:scale-[0.98]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <View className="w-5 h-5 mr-4">
              <View className="flex-row flex-wrap w-5 h-5">
                <View className="w-2 h-2 bg-[#F25022]" />
                <View className="w-2 h-2 bg-[#7FBA00]" />
                <View className="w-2 h-2 bg-[#00A4EF]" />
                <View className="w-2 h-2 bg-[#FFB900]" />
              </View>
            </View>
            <Text className="flex-1 text-center text-base font-semibold text-text-primary font-inter mr-5">
              Continue with Microsoft
            </Text>
          </Pressable>

          {/* Apple Button */}
          <Pressable
            onPress={handleAppleLogin}
            className="flex-row items-center bg-white rounded-xl px-5 py-4 border border-border-medium active:scale-[0.98]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <View className="w-5 h-5 mr-4">
              <Text className="text-xl">🍎</Text>
            </View>
            <Text className="flex-1 text-center text-base font-semibold text-text-primary font-inter mr-5">
              Continue with Apple
            </Text>
          </Pressable>

          {/* Email Button */}
          <Pressable
            onPress={handleEmailLogin}
            className="flex-row items-center bg-white rounded-xl px-5 py-4 border border-border-medium active:scale-[0.98]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <View className="w-5 h-5 mr-4">
              <Text className="text-xl">📧</Text>
            </View>
            <Text className="flex-1 text-center text-base font-semibold text-text-primary font-inter mr-5">
              Continue with Email
            </Text>
          </Pressable>
        </View>

        {/* Terms Text */}
        <View className="mt-8 px-4">
          <Text className="text-xs text-text-tertiary text-center font-inter leading-5">
            By continuing, you agree to Kato's{' '}
            <Text className="text-primary font-semibold">Terms of Service</Text>
            {' '}and{' '}
            <Text className="text-primary font-semibold">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}