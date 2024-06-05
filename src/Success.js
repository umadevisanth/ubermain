import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Globalstyle from './Globalstyle'; // Assuming Globalstyle contains global styles
import { useNavigation } from '@react-navigation/native';

const Success = () => {
    // Success messages to be displayed
    const success = {
        pay: 'Your payment has been made',
        thank: 'Thank you for using ',
        uber: 'Uber',
        done: 'Done'
    };
    const jsonData = JSON.stringify(success); // This line doesn't seem necessary for display purposes, but kept it in case it’s used elsewhere
    const navigation = useNavigation(); // Hook to handle navigation

    return (
        <View style={Globalstyle.containersuccess}>
            {/* Back button to navigate to the previous screen */}
            <View style={Globalstyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <Feather name="arrow-left" size={24} color="#EDF6FF" />
                </TouchableOpacity>
            </View>

            {/* Profile image section */}
            <View style={Globalstyle.Profile_profileimageimage}>
                <View style={Globalstyle.whole_image}>
                    <Image style={Globalstyle.ellipseimage} source={require('../assets/Groupfull.png')} />
                </View>
            </View>

            {/* Payment success message */}
            <Text style={Globalstyle.text}>{success.pay}</Text>
            
            {/* Thank you message with Uber in different color */}
            <View style={Globalstyle.iconContainer}>
                <Text style={Globalstyle.iconText}>
                    {success.thank}
                    <Text style={Globalstyle.uberText}>{success.uber}</Text>
                </Text>
            </View>

            {/* Done button to navigate to Pickup screen */}
            <View style={Globalstyle.buttonContainer}>
                <TouchableOpacity style={Globalstyle.button} onPress={() => navigation.navigate('Paylater')}>
                    <Text style={Globalstyle.buttonText}>{success.done}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Local styles if any needed for this component can be added here
const styles = StyleSheet.create({
   
    // Styles for the text "Uber" in blue color
    uberText: {
        color: 'blue',
    },
});

export default Success;
