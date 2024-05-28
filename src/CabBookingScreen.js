import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Globalstyle from './Globalstyle';

const CabBookingScreen = () => {
  // Access route parameters and navigation functionalities
  const route = useRoute();
  const navigation = useNavigation();
  const { pickupLocation, dropLocation, selectedDate, selectedTime, distance, amount } = route.params;

  const AVERAGE_SPEED_KMH = 60; // Average speed in km/h

  // Function to calculate estimated travel time based on distance and average speed
  const calculateTravelTime = (distance) => {
    const timeInHours = distance / AVERAGE_SPEED_KMH;
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  const travelTime = calculateTravelTime(distance);

  // Handle booking confirmation and navigation to the Payment screen
  const handleConfirmBooking = () => {
    Alert.alert('Booking Confirmed', 'Your cab booking has been confirmed.', [
      { text: 'OK', onPress: () => navigation.navigate('Payment') }
    ]);
  };

  // Get coordinates for a given location name from the list of places
  const getCoordinates = (locationName) => {
    const places = [
      { name: "Hosur", latitude: 12.743028246989406, longitude: 77.82242655968571 },
      { name: "Bangalore", latitude: 12.982049199078174, longitude: 77.59315534942606 },
      { name: "Hyderabad", latitude: 17.414901720009375, longitude: 78.47600521819076 },
      { name: "Varthur", latitude: 12.957906483800606, longitude: 77.74410601475772 },
      { name: "Salem", latitude: 11.660964499186347, longitude: 78.13954353492788 }
    ];
    return places.find(place => place.name.toLowerCase() === locationName.toLowerCase());
  };

  // Retrieve coordinates for pickup and drop locations
  const pickupCoordinates = getCoordinates(pickupLocation);
  const dropCoordinates = getCoordinates(dropLocation);

  return (
    <View style={Globalstyle.container}>
      {/* Back button to navigate to the previous screen */}
      <TouchableOpacity style={Globalstyle.back} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={26} color="#979797" />
      </TouchableOpacity>
      <Text style={Globalstyle.title}>Booking Details</Text>
      {/* Display booking details */}
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Pickup Location:</Text>
        <Text style={Globalstyle.value}>{pickupLocation}</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Drop Location:</Text>
        <Text style={Globalstyle.value}>{dropLocation}</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Date:</Text>
        <Text style={Globalstyle.value}>{selectedDate}</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Time:</Text>
        <Text style={Globalstyle.value}>{selectedTime}</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Distance:</Text>
        <Text style={Globalstyle.value}>{distance} km</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Estimated Travel Time:</Text>
        <Text style={Globalstyle.value}>{travelTime}</Text>
      </View>
      <View style={Globalstyle.detailContainer}>
        <Text style={Globalstyle.label}>Fare:</Text>
        <Text style={Globalstyle.value}>${amount}</Text>
      </View>
      {/* Confirm booking button */}
      <TouchableOpacity style={Globalstyle.confirmButton} onPress={handleConfirmBooking}>
        <Text style={Globalstyle.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
      {/* Map view to display pickup, drop locations, and route polyline */}
      {pickupCoordinates && dropCoordinates && (
        <MapView
          style={Globalstyle.map}
          initialRegion={{
            latitude: (pickupCoordinates.latitude + dropCoordinates.latitude) / 2,
            longitude: (pickupCoordinates.longitude + dropCoordinates.longitude) / 2,
            latitudeDelta: Math.abs(pickupCoordinates.latitude - dropCoordinates.latitude) + 0.1,
            longitudeDelta: Math.abs(pickupCoordinates.longitude - dropCoordinates.longitude) + 0.1,
          }}
        >
          <Marker coordinate={pickupCoordinates} title="Pickup Location" />
          <Marker coordinate={dropCoordinates} title="Drop Location" />
          {/* Polyline to draw the route between pickup and drop locations */}
          <Polyline
            coordinates={[pickupCoordinates, dropCoordinates]}
            strokeColor="#E14D2A"
            strokeWidth={2}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default CabBookingScreen;
