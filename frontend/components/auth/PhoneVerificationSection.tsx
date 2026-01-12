// components/auth/PhoneVerificationSection.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sendOTP, verifyOTP } from './otp-logic';
import InputField from '../ui/InputField';
import AlertModal from '../ui/AlertModal';
import OTPVerificationCard from '../ui/OTPVerificationCard';

export default function PhoneVerificationSection() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  // Modal States
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSendOTP = async () => {
    if (phone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      setShowError(true);
      return;
    }

    setLoading(true);
    try {
      await sendOTP(phone);
      setShowOTPModal(true);
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (otp: string) => {
    try {
      const isValid = await verifyOTP(otp);
      if (isValid) {
        setShowOTPModal(false);
        // Thoda delay taaki modal band ho jaye fir success aaye
        setTimeout(() => setShowSuccess(true), 300);
      } else {
        alert("Invalid OTP"); // Ya error modal dikha sakte hain
      }
    } catch (e) {
      alert("Verification Failed");
    }
  };

  return (
    <View className="mb-6">
      <Text className="text-[#1C1C1E] text-[15px] font-bold mb-3 ml-1">Phone Number</Text>
      <View className="flex-row gap-2">
        {/* Country Code */}
        <View style={styles.shadow} className="bg-white rounded-2xl h-[56px] w-[90px] flex-row items-center justify-center px-2">
          <Text className="text-[#1C1C1E] font-medium mr-1">IN +91</Text>
          <Ionicons name="chevron-down" size={16} color="#1C1C1E" />
        </View>

        {/* Input Field */}
        <View style={styles.shadow} className="flex-1 bg-white rounded-2xl h-[56px] px-4 justify-center">
          <TextInput
            placeholder="9876543210"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
            className="text-[16px] text-[#1C1C1E] font-medium"
          />
        </View>
      </View>

      <TouchableOpacity 
        onPress={handleSendOTP}
        disabled={loading}
        className="mt-4 bg-white rounded-2xl h-[56px] items-center justify-center border border-blue-100"
        style={styles.shadow}
      >
        <Text className="text-[#09a3da] font-bold text-[16px]">
          {loading ? "Sending..." :"Send OTP"}
        </Text>
      </TouchableOpacity>

      {/* --- MODALS --- */}
      
      {/* 1. Phone OTP Card */}
      <OTPVerificationCard
        visible={showOTPModal}
        type="phone"          // <--- Bataya ki Phone verify karna hai
        target={phone}        // <--- Phone number pass kiya
        onVerify={handleVerifyOTP}
        onClose={() => setShowOTPModal(false)}
        onResend={() => alert("OTP Resent to Phone!")}
      />

      {/* 2. Alerts */}
      <AlertModal 
        visible={showSuccess} type="success" 
        title="Verified!" message="Your phone number is verified." 
        onClose={() => setShowSuccess(false)} 
      />
      
      <AlertModal 
        visible={showError} type="error" 
        message={errorMessage} 
        onClose={() => setShowError(false)} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
      android: { elevation: 2 },
    }),
  },
});