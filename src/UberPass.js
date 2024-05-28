import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator' // Assuming this is a custom component for navigation
import styles from './styles' // Importing styles

const UberPass = () => {
  const uberpassdata = {
    // Data for Uber Pass screen
    uberTitle: "Uber Pass",
    uberpassRate: "1 week free - $24.99/mo",
    uberpassMonRate: "$24.99/mo 1 week free",
    uberpassmembershipguide: `Go more places and get more local favorites, all with one membership`,
    SavingsTitle: "Savings on every ride",
    SavingsContent: `Uber Pass has you covered-10% off every UberX, UberL and Comfort ride, 15% off every black, Premier, and SUV ride in the US.`,
    FDonUbereats: "Free delivery on Uber Eats",
    FDonUbereatsContent: `Get a $0 Delivery Fee + 5% off orders over $15. Look for the tickets to save at more than 13000 restaurants in your area.`,
    cancelatAT: "Cancel anytime",
    cancelatATContent: `Cancel your subscription anytime-no penalties or fees.`,
    learnMore: "Learn More",
    getoneWeekFree: "Get 1 week free"
  }

  return (
    <View style={styles.Uberpasspg_main_page}>
      {/* Custom Back Navigator Component */}
      <BackNavigator titleName="Uber Pass" />

      <ScrollView style={styles.UberPasspg_cont}>
        {/* Uber Pass Details Section */}
        <View style={styles.UberPasspg_frst_cont}>
          <TouchableOpacity>
            <Text style={styles.UberPasspg_frst_uptxt}>{uberpassdata.uberTitle}</Text>
            <Text style={styles.UberPasspg_frst_uprate}>{uberpassdata.uberpassRate}</Text>
            <Text style={styles.UberPasspg_frst_updtrt}>{uberpassdata.uberpassMonRate}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.UberPasspg_frst_upmembersp}>{uberpassdata.uberpassmembershipguide}</Text>
          </View>
        </View>

        {/* Savings Details Section */}
        <View style={styles.UberPasspg_scnd_cont}>
          <TouchableOpacity style={styles.UberPasspg_scnd_savonevryride}>
            <Image style={styles.UberPasspg_scnd_prfl_img} source={require("../assets/Images/savingsEveryride.png")} />
            <View style={styles.UberPasspg_scnd_cntr_contnt_box}>
              <Text style={styles.UberPasspg_scnd_cntr_contnt1}>{uberpassdata.SavingsTitle}</Text>
              <Text style={styles.UberPasspg_scnd_cntr_contnt2}>
                {uberpassdata.SavingsContent}</Text>
            </View>
          </TouchableOpacity>
          {/* Similar TouchableOpacity for other savings details */}
        </View>

        {/* Learn More Section */}
        <View style={styles.UberPasspg_trd_cont}>
          <TouchableOpacity style={styles.UberPasspg_trd_lmbtn}><Text style={styles.UberPasspg_trd_lmlbl}>{uberpassdata.learnMore}</Text><Image style={styles.UberPasspg_trd_lmlbl_arrow} source={require('../assets/Images/Vector10.png')} /></TouchableOpacity>
        </View>

        {/* Get One Week Free Button */}
        <View style={styles.UberPasspg_frth_cont}>
          <TouchableOpacity style={styles.UberPasspg_frth_btn}><Text style={styles.UberPasspg_frth_wfree}>{uberpassdata.getoneWeekFree}</Text></TouchableOpacity>
        </View>
      </ScrollView>

      {/* StatusBar */}
      <StatusBar />
    </View>
  )
}

export default UberPass
