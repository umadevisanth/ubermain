import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import Globalstyle from './Globalstyle';
import { Feather } from '@expo/vector-icons';

const Profile = () => {
  const profile = {
    tapping:
      'By tapping the arrow below, you agree to Uber’s Terms of Use and acknowledge that you have read the Privacy Policy.',
    check:
      'Check the box to indicate that you are at least 18 years of age, agree to the Terms & Conditions and acknowledge the Privacy Policy.',
    next: 'Next',
    checkbox:'Check the box to indicate that you are at least 18 years of age, agree to the',
    terms:'Terms & Conditions',
    ack:'and acknowledge the',
    policy:'Privacy Policy'
  
  };

  const navigation = useNavigation(); // Hook to manage navigation
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status

  const handleNextPress = () => {
    if (isChecked) {
      navigation.navigate('Payment'); // Navigate to Payment screen if checkbox is checked
    }
  };

  return (
    <SafeAreaView style={Globalstyle.profilesafetextview}>
      <View>
        {/* Back button to navigate to the previous screen */}
        <TouchableOpacity onPress={() => navigation.navigate('First')}>
          <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Profile_lefticon} />
        </TouchableOpacity>
      </View>

      {/* Profile image section */}
      <View style={Globalstyle.Profile_profileimage}>
        <View style={Globalstyle.whole_image}>
          <Image style={Globalstyle.ellipse} source={require('../assets/Ellipse1.png')} />
        </View>
        <Image style={Globalstyle.icon_profile} source={require('../assets/vs_profile.png')} />
      </View>

      {/* Text describing terms and privacy policy */}
      <View>
        <Text style={Globalstyle.Profile_tapping}>{profile.tapping}</Text>
      </View>

      {/* Checkbox and terms text */}
      <View>
        <View style={Globalstyle.Profile_text}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={Globalstyle.Profile_check}>
            {profile.checkbox}{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://www.uber.com/legal/terms/us/')}
            >
              {profile.terms}
            </Text>{' '}
            {profile.ack}{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://www.uber.com/legal/privacy/us/')}
            >
              {profile.policy}
            </Text>
            .
          </Text>
        </View>

        {/* Next button displayed only if checkbox is checked */}
        {isChecked && (
          <TouchableOpacity style={Globalstyle.Profile_checked} onPress={handleNextPress}>
            <Text style={Globalstyle.Profile_next}>{profile.next}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
