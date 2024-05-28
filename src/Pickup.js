import React from 'react';
import { View, TouchableOpacity, Image, TextInput, Text, StatusBar, ScrollView } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Globalstyle from './Globalstyles';

const Pickup = () => {
    const pick={
        pickup:'To find your pickup',
        location:'location',
        turn:'automatically, turn',
        services:'on location services',
        turnon:'Turn on Location',
        ride:'Ride',
        package:'Package',
        around:'Around you',





    };
    const jsonData = JSON.stringify(pick);

    const navigation = useNavigation(); // Hook to manage navigation

    return (
        <View>
            {/* StatusBar to handle the status bar style */}
            <StatusBar style='auto' />

            {/* ScrollView to allow scrolling for long content */}
            <ScrollView>
                {/* Container for the top section content */}
                <View style={Globalstyle.contentbg}>
                    <View style={Globalstyle.content}>
                        {/* Button to navigate to the profile screen */}
                        <TouchableOpacity onPress={() => { navigation.navigate("UberProfile") }}>
                            <FontAwesome name="bars" size={25} color="#fff" />
                        </TouchableOpacity>

                        {/* Information text about location services */}
                        <View style={Globalstyle.locationcont}>
                            <Text style={Globalstyle.locationText}>{pick.pickup}</Text>
                            <Text style={Globalstyle.locationText}>{pick.location}</Text>
                            <Text style={Globalstyle.locationText}>{pick.turn}</Text>
                            <Text style={Globalstyle.locationText}>{pick.services}</Text>
                        </View>

                        {/* Button to turn on location services */}
                        <TouchableOpacity style={Globalstyle.Touchablebut}>
                            <Text style={Globalstyle.Touchablebuttext}>{pick.turnon}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Container for the main content below the top section */}
                <View style={Globalstyle.imagecontbg}>
                    <View style={Globalstyle.imagecontmain}>
                        <View style={Globalstyle.imagecont}>
                            <View>
                                {/* Button to navigate to the Select Location screen */}
                                <TouchableOpacity onPress={() => { navigation.navigate('SelectLocationScreen') }}>
                                    <Image style={Globalstyle.image} source={require('../assets/car.png')} />
                                    <Text style={Globalstyle.imagetxt}>{pick.ride}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                {/* Button to navigate to the Packages screen */}
                                <TouchableOpacity onPress={() => { navigation.navigate('Packages'); }}>
                                    <Image style={Globalstyle.image} source={require('../assets/package.png')} data-testid="package-image" />
                                    <Text style={Globalstyle.imagetxt}>{pick.package}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Text input for entering the pickup point */}
                        <View>
                            <TextInput 
                                style={Globalstyle.textinput} 
                                placeholder='Enter pickup point' 
                                placeholderTextColor='white' 
                                color='white' 
                            />
                            <Text style={Globalstyle.aroundtext}>{pick.around}</Text>
                        </View>
                    </View>

                    {/* Container for the map view */}
                    <View style={Globalstyle.mapContainer}>
                        <MapView style={Globalstyle.mapCont}></MapView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Pickup;
