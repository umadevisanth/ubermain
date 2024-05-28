import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { firestore } from '../Config';  // Import Firestore configuration
import { useNavigation } from '@react-navigation/native';  // Import navigation hook
import { Feather } from '@expo/vector-icons';  // Import Feather icons
import MapView from 'react-native-maps';  // Import MapView component

const BookingDetailsScreen = ({ route }) => {


  const book = {

    pick:'Pickup Location:',
    drop:'Dropping Location:',
    date:'Date:',
    time:'Time:', 
    distance:'Distance:',
    amount:'Amount Per Km:',
    fare:'Fare Amount:',
    confirm:'Confirm Booking',
    km:'KM',
    inr:'INR'
    
  };
  const jsonData = JSON.stringify(book);

  const { bookingId } = route.params;  // Extract bookingId from route parameters
  const [loading, setLoading] = useState(true);  // State to manage loading indicator
  const [bookingDetails, setBookingDetails] = useState(null);  // State to store booking details

  const navigation = useNavigation();  // Get navigation object

  useEffect(() => {
    // Function to fetch booking details from Firestore
    const fetchBookingDetails = async () => {
      try {
        const documentSnapshot = await firestore.collection('bookings').doc(bookingId).get();  // Fetch booking details
        if (documentSnapshot.exists) {
          setBookingDetails(documentSnapshot.data());  // Set booking details if document exists
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching booking details: ', error);  // Log any errors
      } finally {
        setLoading(false);  // Set loading to false after fetching data
      }
    };
    fetchBookingDetails();
  }, [bookingId]);  // Dependency array ensures this effect runs when bookingId changes

  // Function to handle booking confirmation
  const handleConfirmBooking = () => {
    navigation.navigate('Payment');  // Navigate to Payment screen
    Alert.alert('Success', 'Booking successfully made.');  // Show success alert
  };

  if (loading) {
    // Render loading indicator if data is still being fetched
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back button to navigate to the previous screen */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={26} color="#979797" />
      </TouchableOpacity>
      
      {/* Display booking details */}
      <Text style={styles.distance}>{book.pick} {bookingDetails?.pickupLocation}</Text>
      <Text style={styles.distance}>{book.drop} {bookingDetails?.dropLocation}</Text>
      <Text style={styles.distance}>{book.date} {bookingDetails?.selectedDate}</Text>
      <Text style={styles.distance}>{book.time} {bookingDetails?.selectedTime}</Text>
      <Text style={styles.distance}>{book.distance} {bookingDetails?.distance}{book.km}</Text>
      <Text style={styles.distance}>{book.amount} {bookingDetails?.amountPerKm}</Text>
      <Text style={styles.distance}>{book.fare} {bookingDetails?.fareAmount} {book.inr}</Text>
      
      {/* Button to confirm the booking */}
      <TouchableOpacity
        onPress={handleConfirmBooking}
        style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>{book.confirm}</Text>
      </TouchableOpacity>
      
      {/* MapView to display location map */}
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <StatusBar />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
    backgroundColor: '#1A1A1A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distance: {
    color: '#DADADA',
    fontSize: 18,
  },
  back: {
    marginBottom: '4%',
  },
  map: {
    height: 300,
    alignItems: 'center',
  },
  confirmButton: {
    marginVertical: 30,
    width: '100%',
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: '4%',
    fontSize: 30,
  },
  confirmButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default BookingDetailsScreen;
