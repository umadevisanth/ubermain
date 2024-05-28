import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles' // Importing styles
import BackNavigator from './BackNavigator' // Custom Back Navigator Component

const UberPaymentpage = () => {
  // Data for payment options
  const paymentData = {
    paymntMetd: "Add Payment Method",
    paymentRideProfiles: "Ride Profiles",
    paymentPersonal: "Personal",
    paymentStrtUberbuz: "Start using Uber for business",
    paymentBuzTrvelfet: "Turn on business travel features",
    paymentpromotions: "Promotions",
    paymentaddpromocod: "Add Promo code",
    paymentVouchers: "Vouchers",
    paymentaddVouchers: "Add Voucher code"
  }

  return (
    <View style={styles.Paymentpg_main}>
      {/* Custom Back Navigator Component */}
      <BackNavigator titleName="Payment" />

      <ScrollView style={styles.Paymentpg_frst_cont}>
        {/* Add Payment Method Section */}
        <View style={styles.Paymentpg_frst_adpaymnt}>
          <TouchableOpacity>
            <Text style={styles.Paymentpg_frst_adpaymnt_lbl}>{paymentData.paymntMetd}</Text>
          </TouchableOpacity>
        </View>

        {/* Ride Profiles Section */}
        <View style={styles.Paymentpg_scnd_cont}>
          <Text style={styles.Paymentpg_scndcont_frsttxt}>{paymentData.paymentRideProfiles}</Text>
          {/* Personal Profile */}
          <TouchableOpacity style={styles.Paymentpg_scnd_prflone}>
            <Image style={styles.Paymentpg_scnd_prflimg} source={require("../assets/Images/Ellipse9.png")} />
            <View style={styles.Paymentpg_scnd_prfl_prsnl_cont}>
              <Text style={styles.Paymentpg_scnd_prfl_prsnl_txt}>{paymentData.paymentPersonal}</Text>
            </View>
          </TouchableOpacity>
          {/* Business Profile */}
          <TouchableOpacity style={styles.Paymentpg_scnd_prflone}>
            <Image style={styles.Paymentpg_scnd_prflimg} source={require("../assets/Images/Ellipse10.png")} />
            <View style={styles.Paymentpg_scnd_prfl_prsnl_cont}>
              <Text style={styles.Paymentpg_scnd_prfl_bsns_txt}>{paymentData.paymentStrtUberbuz}</Text>
              <Text style={styles.Paymentpg_scnd_prfl_bsns_txt2}>{paymentData.paymentBuzTrvelfet}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Promotions Section */}
        <View style={styles.Paymentpg_trd_cont}>
          <Text style={styles.Paymentpg_trd_frsttxt}>{paymentData.paymentpromotions}</Text>
          {/* Promotions Image */}
          <TouchableOpacity style={styles.Paymentpg_trd_scnd_cont}>
            <Image style={styles.Paymentpg_trd_promoimg} source={require('../assets/Images/Rectangle16.png')} />
            <Text style={styles.Paymentpg_trd_prom_secttl}>{paymentData.paymentpromotions}</Text>
          </TouchableOpacity>
          {/* Add Promo Code Button */}
          <TouchableOpacity style={styles.Paymentpg_trd_addpromo_btn}>
            <Text style={styles.Paymentpg_trd_addpromo_txt}>{paymentData.paymentaddpromocod}</Text>
          </TouchableOpacity>
        </View>

        {/* Vouchers Section */}
        <View style={styles.Paymentpg_fourt_cont}>
          <Text style={styles.Paymentpg_trd_frsttxt}>{paymentData.paymentVouchers}</Text>
          {/* Vouchers Image */}
          <TouchableOpacity style={styles.Paymentpg_trd_scnd_cont}>
            <Image style={styles.Paymentpg_trd_promoimg} source={require('../assets/Images/Voucher.png')} />
            <Text style={styles.Paymentpg_trd_prom_secttl}>{paymentData.paymentVouchers}</Text>
          </TouchableOpacity>
          {/* Add Voucher Code Button */}
          <TouchableOpacity style={styles.Paymentpg_trd_addpromo_btn}>
            <Text style={styles.Paymentpg_trd_addpromo_txt}>{paymentData.paymentaddVouchers}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* StatusBar */}
      <StatusBar />
    </View>
  )
}

export default UberPaymentpage;
