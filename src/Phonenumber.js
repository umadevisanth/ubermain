import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather } from '@expo/vector-icons';
import Globalstyle from './Globalstyle';
import Dropdown from './Dropdown';

const Phonenumber = () => {
  // State to manage various form and OTP elements
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [otpSent, setOTPSent] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ image: require('../assets/Flag.jpeg'), countryCode: '+91' });

  const navigation = useNavigation();  // Hook to manage navigation

  // Text content for the component
  const phone = {
    phonenumber: 'Enter the Mobile Number',
    social: ' Or connect with Social',
    code: 'Enter the 6-digit code sent to your Mobile Number',
    send: 'Send OTP',
    otp: 'Verify OTP',
    resend: 'Resend OTP',
    next: 'Next',
    sms:'By continuing you may receive an SMS for verification. Message and data rates may apply',
    butt:'Next'
  };

  // Generate OTP when the phone number is entered
  useEffect(() => {
    setGeneratedOTP(generateOTP());
  }, [phoneNumber]);

  // Function to generate a 6-digit OTP
  const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  // Function to handle sending the OTP
  const handleSendOTP = async () => {
    try {
      if (!phoneNumber) {
        Alert.alert('Error', 'Please enter a phone number.');
        return;
      }

      // Validate phone number format (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
        Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
        return;
      }

      setIsSendingOTP(true);
      const otp = generateOTP();
      setGeneratedOTP(otp);
      setOTPSent(true);  // Enable OTP input and verification
      setVerificationFailed(false);  // Reset verification failure status

      Alert.alert('OTP Generated!', `The OTP for ${phoneNumber} is ${otp}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate OTP.');
    } finally {
      setIsSendingOTP(false);
    }
  };

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    if (enteredOTP === '') {
      Alert.alert('Error', 'Please enter OTP.');
      return;
    }

    if (enteredOTP === generatedOTP) {
      Alert.alert('Success', 'OTP verified successfully.');
      setDisplayNext(true);
      setVerificationFailed(false);  // Reset verification failure status
    } else {
      setVerificationFailed(true);  // Set verification failure status
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  // Function to handle resending OTP
  const handleResendOTP = () => {
    // Reset OTP and resend
    setGeneratedOTP('');
    setEnteredOTP('');
    setOTPSent(false);
    handleSendOTP();
  };

  // Function to handle item selection from dropdown
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  // Function to handle 'Next' button press
  const handleNext = () => {
    if (!phoneNumber || !enteredOTP) {
      Alert.alert('Error', 'Please fill in all the details.');
      return;
    }

    if (displayNext) {
      navigation.navigate('First');  // Navigate to another screen when displayNext is true
    }
  };

  return (
    <SafeAreaView style={Globalstyle.Phonenumber_cont}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={Globalstyle.Phone_left_cont}>
            {/* Back button */}
            <TouchableOpacity onPress={() => navigation.goBack('Login')}>
              <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Phone_left} />
              {/* <FontAwesome name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Phone_left} /> */}
            </TouchableOpacity>
          </View>

          {/* Prompt to enter phone number */}
          <Text style={Globalstyle.Phone_phonenumber}>{phone.phonenumber}</Text>
          <View style={Globalstyle}>
            <View style={Globalstyle.Phone_dropdown}>
              <View style={Globalstyle.Phone_flag}>
                <Image source={selectedItem.image} style={Globalstyle.phonenumberimage} />
                <Text>Selected Country Code: {selectedItem.countryCode}</Text>
              </View>
              <View style={Globalstyle.Phone_drop}>
                {/* Dropdown for country code selection */}
                <Dropdown onSelectItem={handleItemSelect} />
              </View>
              <View style={Globalstyle.Phone_phonetext}>
                <Text style={Globalstyle.countrycode}>{selectedItem ? selectedItem.countryCode : ''}</Text>
                {/* TextInput for phone number entry */}
                <TextInput
                  style={Globalstyle.Phone_phoneinputtext}
                  placeholder={'Enter Your number'}
                  placeholderTextColor={'white'}
                  placeholderSize={24}
                  value={phoneNumber}
                  keyboardType='numeric'
                  onChangeText={setPhoneNumber}
                  maxLength={10}
                />
              </View>
            </View>
          </View>

          {/* Display Send OTP button or OTP verification inputs based on otpSent state */}
          {!otpSent && (
            <View style={Globalstyle.Phone_otp}>
              <Button title={phone.send} onPress={handleSendOTP} disabled={isSendingOTP} />
              <Text onPress={() => navigation.navigate('Social')} style={{...Globalstyle.Phone_social, color: '#535AFF' }}>
                {phone.social} <Feather name="arrow-right" size={20} color="black" style={Globalstyle.phonenumberdisplayotp} />
              </Text>
            </View>
          )}
          {otpSent && (
            <>
              <Text style={Globalstyle.otp}>{phone.code}</Text>
              <TextInput
                style={Globalstyle.enterotp}
                placeholder="Enter OTP"
                placeholderTextColor={'white'}
                value={enteredOTP}
                maxLength={6}
                onChangeText={setEnteredOTP}
                keyboardType="numeric"
              />
              <View style={Globalstyle.phonenumberotpsuccess}>
                <Button title={phone.otp} onPress={handleVerifyOTP} />
                <View style={Globalstyle.buttonviewtext}>
                  {verificationFailed && (
                    <Button title={phone.resend} onPress={handleResendOTP} disabled={isSendingOTP} />
                  )}
                </View>
                {displayNext && (
                  <TouchableOpacity onPress={() => navigation.navigate('Social')}>
                    <Text></Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}

          {/* Footer message and Next button */}
          <View style={Globalstyle.otpmsg}>
            <Text style={Globalstyle.phonenumberfootermessage}>
            {phone.sms}
           </Text>
            <TouchableOpacity onPress={handleNext} style={Globalstyle.btnnext}>
              <Text style={Globalstyle.phonenumberfooternext}>{phone.butt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Phonenumber;
