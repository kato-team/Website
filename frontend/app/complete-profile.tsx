import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  FlatList,
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  Modal
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Camera aur Icons ke liye
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button'; // Aapka existing button

export default function CompleteProfile() {
  const router = useRouter();
  const [teamSize, setTeamSize] = useState(1);
  const [category, setCategory] = useState('');
const [showModal, setShowModal] = useState(false);

  const BUSINESS_CATEGORIES = [
  "Retail Shop",
  "Restaurant",
  "Real Estate",
  "Salon/Beauty",
  "Coaching/Classes",
  "Freelancer (Designer/Writer)",
  "Consultancy",
  "E-commerce",
  "Healthcare",
  "Technology",
  "Other"
];

  const handleContinue = () => {
    // Yaha data save karne ka logic aayega
    console.log("Profile Completed");
    router.replace('/(tabs)'); // Profile complete hone ke baad dashboard/home par bhejein
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F7]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >

          <View className="px-6 mt-10">
            {/* Header */}
            <Text className="text-2xl font-bold text-[#1C1C1E] mb-2">
              Complete Your Profile
            </Text>
            <Text className="text-gray-500 mb-6">
              Tell us about yourself and your business
            </Text>

            {/* Top Progress Bars */}
          <View className="flex-row px-6 mt-2 gap-2">
            <View className="flex-1 h-1 bg-[#09a3da] rounded-full" />
            <View className="flex-1 h-1 bg-gray-300 rounded-full" />
          </View>

            {/* Profile Image Section */}
            <View className="items-center mb-8">
              <TouchableOpacity style={styles.shadow} className="relative">
                <View className="h-28 w-28 bg-[#3b82f6] rounded-full items-center justify-center border-4 border-white">
                  <Ionicons name="camera" size={32} color="white" />
                </View>
                {/* Small edit badge */}
                <View className="absolute bottom-0 right-0 bg-white p-2 rounded-full border border-gray-100">
                   <Ionicons name="pencil" size={14} color="#09a3da" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Form Fields */}
            <InputField 
              label="Full Name" 
              placeholder="John Doe" 
            />
            
            <InputField 
              label="Email" 
              placeholder="john@example.com" 
              keyboardType="email-address" 
            />

            <InputField 
              label="Business Name" 
              placeholder="Acme Inc." 
            />

            {/* Category Dropdown (Visual Only) */}
            {/* Business Category Section */}
<View className="mb-5">
  <Text className="text-[#1C1C1E] text-[15px] font-bold mb-3 ml-1">
    Business Category
  </Text>

  {/* Dropdown Button */}
  <TouchableOpacity 
    onPress={() => setShowModal(true)}
    style={styles.shadow} 
    className="bg-white rounded-2xl h-[56px] flex-row items-center justify-between px-4"
  >
    <Text className={`font-medium text-[16px] ${category ? 'text-[#1C1C1E]' : 'text-gray-500'}`}>
      {category || "Select category"}
    </Text>
    <Ionicons name="chevron-down" size={20} color="#1C1C1E" />
  </TouchableOpacity>

  {/* Dropdown Modal */}
  <Modal
    visible={showModal}
    transparent={true}
    animationType="fade"
    onRequestClose={() => setShowModal(false)}
  >
    <TouchableOpacity 
      style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} 
      activeOpacity={1} 
      onPress={() => setShowModal(false)}
    >
      <View className="flex-1 justify-center px-6">
        <TouchableWithoutFeedback>
          <View className="bg-white rounded-2xl max-h-[500px] overflow-hidden">
            {/* Header */}
            <View className="p-4 border-b border-gray-100 bg-gray-50">
              <Text className="text-center font-bold text-gray-700">Select Category</Text>
            </View>
            
            {/* List */}
            <FlatList
              data={BUSINESS_CATEGORIES}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`p-4 border-b border-gray-100 ${category === item ? 'bg-blue-50' : ''}`}
                  onPress={() => {
                    setCategory(item);
                    setShowModal(false);
                  }}
                >
                  <Text className={`text-[16px] ${category === item ? 'font-bold text-[#09a3da]' : 'text-[#1C1C1E]'}`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  </Modal>
</View>

            <InputField 
              label="Work Email (Optional)" 
              placeholder="work@company.com" 
              keyboardType="email-address"
            />

            <InputField 
              label="Business Description (Optional)" 
              placeholder="Tell us about your business..."
              isTextArea={true}
            />

            <InputField 
              label="Location / City" 
              placeholder="Mumbai, India" 
            />

            {/* Team Size Counter */}
            <View className="mb-5">
              <Text className="text-[#1C1C1E] text-[15px] font-bold mb-3 ml-1">Team Size</Text>
              <View style={styles.shadow} className="bg-white rounded-2xl h-[56px] flex-row items-center justify-between px-4">
                <TouchableOpacity 
                  onPress={() => setTeamSize(Math.max(1, teamSize - 1))}
                  className="w-10 h-10 items-center justify-center bg-gray-100 rounded-full"
                >
                  <Ionicons name="remove" size={20} color="#1C1C1E" />
                </TouchableOpacity>

                <Text className="text-xl font-bold text-[#1C1C1E]">{teamSize}</Text>

                <TouchableOpacity 
                   onPress={() => setTeamSize(teamSize + 1)}
                   className="w-10 h-10 items-center justify-center bg-gray-100 rounded-full"
                >
                  <Ionicons name="add" size={20} color="#1C1C1E" />
                </TouchableOpacity>
              </View>
            </View>

            <InputField 
              label="Website (Optional)" 
              placeholder="https://example.com"
              keyboardType="url" 
              autoCapitalize="none"
            />

            {/* Continue Button */}
            <View className="mt-4 mb-8">
              <Button 
                title="Continue" 
                onPress={handleContinue}
                variant="primary"
                icon={<Ionicons name="checkmark" size={20} color="white" />}
              />
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});