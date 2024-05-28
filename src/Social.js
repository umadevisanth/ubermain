import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import Globalstyle from './Globalstyle'; // Assuming Globalstyle contains global styles
import { Feather } from '@expo/vector-icons';

const Social = () => {
  // Social text content
  const social = {
    account: 'Choose an Account',
    facebook: 'Facebook',
    google: 'Google',
    click: 'By clicking on a social option you may receive an SMS verification. Message and data rates may apply.',
    next: 'Next',
    errorMessage: 'Please select a social option.', // New error message
  };

  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  // Function to handle navigation when the "Next" button is pressed
  const handleNavigate = () => {
    if (isChecked) {
      navigation.navigate('First'); // Navigate to 'Phonenumber' screen only if checkbox is checked
    } else {
      setError(social.errorMessage); // Set error message if checkbox is not checked
    }
  };

  // Function to open Facebook URL
  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  // Function to open Gmail URL
  const openGmail = () => {
    Linking.openURL('https://mail.google.com/');
  };

  return (
    <SafeAreaView style={Globalstyle.socialsafeareaview}>
      {/* Navigation Back Button */}
      <View style={Globalstyle.socialnavigationbutton}>
        <TouchableOpacity onPress={() => navigation.goBack('PhoneNumber')}>
          <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Social_iconleft} />
          {/* <i class="fa-solid fa-arrow-left"></i> */}
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        {/* Account Selection */}
        <View style={Globalstyle.socialaccountselection}>
          <Text style={Globalstyle.Social_account}>{social.account}</Text>
        </View>

        {/* Social Options */}
        <View style={Globalstyle.socialsocialoptions}>
          <TouchableOpacity onPress={openFacebook}>
            <View style={Globalstyle.socialoptionview}>
              <Image style={Globalstyle.Social_facebookimage} source={require('../assets/facebook-logo-3.png')} />
              <Text style={Globalstyle.Social_facebook}>{social.facebook}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openGmail}>
            <View style={Globalstyle.socialviewtext}>
              <Image style={Globalstyle.Social_googleimage} source={require('../assets/Google-Logo-PNG-Image.png')} />
              <Text style={Globalstyle.Social_google}>{social.google}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Checkbox and Information Text */}
        <View style={Globalstyle.socialcheckbox}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={Globalstyle.socialchecktextmsg}>
            {social.click}
          </Text>
        </View>
      </View>

      {/* Error Message */}
      {error !== '' && <Text style={Globalstyle.socialerrormsg}>{error}</Text>}

      {/* Next Button */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            borderColor: isChecked ? '#EDF6FF' : 'grey', // Change border color based on checkbox state
            justifyContent: 'center',
            borderRadius: 2,
            width: '80%',
            marginLeft: '10%',
            opacity: isChecked ? 1 : 0.5, // Change opacity based on checkbox state
          }}
          onPress={handleNavigate}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          <Text style={Globalstyle.socialdisablebutton}>{social.next}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Social;
