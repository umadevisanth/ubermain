import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Debit = () => {
  const debit = {

      paytm:'Paytm Payment',
      trans:'Transaction Details:',
      amount:'Amount: $50',
      receipt:'Recipient: John Doe',
      id:'Transaction ID: 123456789',
      proceed:'Proceed to Payment',


    
  };
  const jsonData = JSON.stringify(debit);


    const navigation = useNavigation();
    const handlePayment = () => {
        // Here you would integrate with Paytm's payment gateway
        // For this example, we'll just show an alert to simulate a successful payment
        Alert.alert('Payment Successful', 'Thank you for your payment!', [
          { text: 'OK', onPress: () => navigation.navigate('Account') }, // Navigate to Home screen after payment
        ]);
      };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{debit.paytm}</Text>
      </View>
      
      {/* Transaction Details */}
      <View style={styles.content}>
        <Text style={styles.transactionDetails}>{debit.trans}</Text>
        <Text style={styles.transactionText}>{debit.amount}</Text>
        <Text style={styles.transactionText}>{debit.receipt}</Text>
        <Text style={styles.transactionText}>{debit.id}</Text>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>{debit.proceed}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      marginBottom: 30,
    },
    transactionDetails: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    transactionText: {
      fontSize: 16,
      marginBottom: 5,
    },
    paymentButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    paymentButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Debit