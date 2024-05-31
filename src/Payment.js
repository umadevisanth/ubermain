import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Globalstyle from './Globalstyle';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);  // State to track selected payment method
  const [showAlert, setShowAlert] = useState(false);  // State to control the display of the alert
  const [showModal, setShowModal] = useState(false);  // State to control the display of the modal
  const navigation = useNavigation();  // Hook to get navigation object

  // Payment method labels and messages
  const payment = {
    later: 'DO THIS LATER',
    payment: 'Select your preferred payment method',
    credit: 'Credit or Debit card',
    paytm: 'Paytm',
    cash: 'Cash',
    next: 'Next',
    ride: 'You won’t be able to request a ride without adding a payment method.',
    pay: 'Add Payment Method Now',
    later: 'Do It Later',
    confirm: 'Confirm Payment',
  };

  // Handler for payment method selection
  const handlePress = (method) => {
    setSelectedPayment(method);
    setShowModal(true);
  };

  // Handler for 'Do This Later' button
  const handleLaterPress = () => {
    setShowAlert(true);  // Show the alert message
  };

  // Handler to add a payment method
  const handleAddPaymentMethod = () => {
    setShowAlert(false);  // Close the alert
    navigation.navigate('Payment');  // Navigate to Payment screen
  };

  // Handler to close the alert and navigate to Pickup screen
  const handleCloseAlert = () => {
    setShowAlert(false);  // Close the alert
    navigation.navigate('Paylater');  // Navigate to Pickup screen
  };

  // Handler for confirming the payment method
  const handleConfirmPayment = () => {
    setShowModal(false);
    navigation.navigate('Success');  // Navigate to the Success screen
  };

  return (
    <SafeAreaView style={Globalstyle.paymentsafeareaview}>
      <View style={Globalstyle.paymentviewtwxt}>
        {/* 'Do This Later' button */}
        <TouchableOpacity onPress={handleLaterPress}>
          <Text style={Globalstyle.Payment_later}>{payment.later}</Text>
        </TouchableOpacity>

        {/* Payment method selection header */}
        <View style={Globalstyle.paymentselection}>
          <Text style={Globalstyle.Payment_payment}>{payment.payment}</Text>
        </View>

        {/* Payment method options */}
        <View style={Globalstyle.paymentmethodoptions}>
          <TouchableOpacity onPress={() => handlePress(payment.credit)}>
            <View style={Globalstyle.Payment_creditcard}>
              <Image style={Globalstyle.paymentmethodimage} source={require('../assets/CreditCard.png')} />
              <Text style={Globalstyle.Payment_debitcard}>{payment.credit}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress(payment.paytm)}>
            <View style={Globalstyle.Payment_paytm}>
              <Image style={Globalstyle.paymentmethodimage} source={require('../assets/Paytm.png')} />
              <Text style={Globalstyle.Paytm_text}>{payment.paytm}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress(payment.cash)}>
            <View style={Globalstyle.Paytm_opacity}>
              <Image style={Globalstyle.paymentmethodimage} source={require('../assets/Cash.png')} />
              <Text style={Globalstyle.Paytm_cash}>{payment.cash}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Alert message */}
        {showAlert && (
          <View style={Globalstyle.alertContainer}>
            <Text style={Globalstyle.alertMessage}>{payment.ride}</Text>
            <TouchableOpacity style={[Globalstyle.button, Globalstyle.addButton]} onPress={handleAddPaymentMethod}>
              <Text style={[Globalstyle.buttonText, Globalstyle.addButtonText]}>{payment.pay}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Globalstyle.button, Globalstyle.laterButton]} onPress={handleCloseAlert}>
              <Text style={[Globalstyle.buttonText, Globalstyle.laterButtonText]}>{payment.later}</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* 'Next' button to proceed with the selected payment method */}
        <View style={Globalstyle.paymentbuttontext}>
          {selectedPayment && (
            <TouchableOpacity style={Globalstyle.Payment_next} onPress={handleConfirmPayment}>
              <Text style={Globalstyle.paymentnexttext}>{payment.next}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Modal for confirming payment method */}
      <Modal visible={showModal} transparent animationType="slide">
        <View style={Globalstyle.modalContainer}>
          <View style={Globalstyle.modalContent}>
            <Text style={Globalstyle.modalText}>Confirm Payment via {selectedPayment}?</Text>
            <TouchableOpacity style={Globalstyle.confirmButton} onPress={handleConfirmPayment}>
              <Text style={Globalstyle.confirmButtonText}>{payment.confirm}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Globalstyle.cancelButton} onPress={() => setShowModal(false)}>
              <Text style={Globalstyle.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Payment;
