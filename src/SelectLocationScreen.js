import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Alert, TouchableOpacity, StatusBar } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Globalstyle from './Globalstyle';

// List of predefined places with coordinates
const places = [
  { name: "Hosur", latitude: 12.743028246989406, longitude: 77.82242655968571 },
  { name: "Bangalore", latitude: 12.982049199078174, longitude: 77.59315534942606 },
  { name: "Hyderabad", latitude: 17.414901720009375, longitude: 78.47600521819076 },
  { name: "Varthur", latitude: 12.957906483800606, longitude: 77.74410601475772 },
  { name: "Salem", latitude: 11.660964499186347, longitude: 78.13954353492788 }
];

// Function to calculate the distance between two coordinates using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance;
};

// Function to calculate the fare amount based on distance
const calculateAmount = (distance, ratePerKm = 1.5) => {
  return distance * ratePerKm;
};

const SelectLocationScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [pickupError, setPickupError] = useState('');
  const [dropError, setDropError] = useState('');
  const navigation = useNavigation();

  // Show date picker modal
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hide date picker modal
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handle date selection
  const handleDateConfirm = (date) => {
    setSelectedDate(moment(date).format('DD-MM-YYYY'));
    hideDatePicker();
  };

  // Show time picker modal
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Hide time picker modal
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Handle time selection
  const handleTimeConfirm = (time) => {
    setSelectedTime(moment(time).format('HH:mm'));
    hideTimePicker();
  };

  // Swap pickup and drop locations
  const handleToggleLocations = () => {
    const tempLocation = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(tempLocation);
  };

  // Get coordinates for a given location name
  const getCoordinates = (locationName) => {
    const location = places.find(place => place.name.toLowerCase() === locationName.toLowerCase());
    return location ? { latitude: location.latitude, longitude: location.longitude } : null;
  };

  // Handle form submission
  const handleSubmit = () => {
    let isValid = true;

    if (!pickupLocation.trim()) {
      setPickupError('Pickup location is required');
      isValid = false;
    } else {
      setPickupError('');
    }

    if (!dropLocation.trim()) {
      setDropError('Dropping location is required');
      isValid = false;
    } else {
      setDropError('');
    }

    if (isValid && selectedDate && selectedTime) {
      const pickupCoordinates = getCoordinates(pickupLocation);
      const dropCoordinates = getCoordinates(dropLocation);

      if (pickupCoordinates && dropCoordinates) {
        const distance = calculateDistance(pickupCoordinates.latitude, pickupCoordinates.longitude, dropCoordinates.latitude, dropCoordinates.longitude);
        const amount = calculateAmount(distance);

        // Navigate to the CabBookingScreen with the details
        navigation.navigate('CabBookingScreen', {
          pickupLocation,
          dropLocation,
          selectedDate,
          selectedTime,
          distance: distance.toFixed(2), // Rounding off to 2 decimal places
          amount: amount.toFixed(2) // Rounding off to 2 decimal places
        });
      } else {
        Alert.alert('Error', 'Invalid location names.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={Globalstyle.container}>
      {/* Back button to navigate to the previous screen */}
      <TouchableOpacity style={Globalstyle.back} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={26} color="#979797" />
      </TouchableOpacity>

      {/* Pickup location input */}
      <View style={Globalstyle.locationContainer}>
        <TextInput
          label="Pickup Location"
          value={pickupLocation}
          placeholder='Enter Your pickup location'
          placeholderTextColor='#979797'
          onChangeText={(text) => {
            setPickupLocation(text);
            setPickupError('');
          }}
          style={pickupError ? Globalstyle.inputError : Globalstyle.input}
        />
        {pickupError ? <Text style={Globalstyle.errorText}>{pickupError}</Text> : null}
      </View>

      {/* Button to swap pickup and drop locations */}
      <TouchableOpacity onPress={handleToggleLocations} style={Globalstyle.iconContainer}>
        <MaterialIcons name="swap-vert" size={30} color='#979797' />
      </TouchableOpacity>

      {/* Drop location input */}
      <View style={Globalstyle.locationContainer}>
        <TextInput
          label="Dropping Location:"
          value={dropLocation}
          placeholder='Enter Your dropping location'
          placeholderTextColor='#979797'
          onChangeText={(text) => {
            setDropLocation(text);
            setDropError('');
          }}
          style={dropError ? Globalstyle.inputError : Globalstyle.input}
        />
        {dropError ? <Text style={Globalstyle.errorText}>{dropError}</Text> : null}
      </View>

      {/* Date and time selection */}
      <View style={Globalstyle.dateTimeContainer}>
        <TouchableOpacity onPress={showDatePicker} style={Globalstyle.dateTimeButton}>
          <Text style={Globalstyle.dateTimeText}>
            {selectedDate ? String(selectedDate) : 'Select Date'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker} style={Globalstyle.dateTimeButton}>
          <Text style={Globalstyle.dateTimeText}>
            {selectedTime ? String(selectedTime) : 'Select Time'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Date and time picker modals */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />

      {/* Submit button */}
      <TouchableOpacity onPress={handleSubmit} style={Globalstyle.submitButton}>
        <Text style={Globalstyle.submitButtonText}>Select</Text>
      </TouchableOpacity>

      {/* Map to display locations */}
      <View style={Globalstyle.mapContainer}>
        <MapView
          style={Globalstyle.mapCont}
          initialRegion={{
            latitude: places[0].latitude,
            longitude: places[0].longitude,
            latitudeDelta: 50,
            longitudeDelta: 50,
          }}
        >
          {places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: place.latitude, longitude: place.longitude }}
              title={place.name}
            />
          ))}
        </MapView>
      </View>

      <StatusBar />
    </View>
  );
};
const styles = StyleSheet.create({
  
});

export default SelectLocationScreen;
