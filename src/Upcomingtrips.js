import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Upcomingtrips = () => {
  const upcoming={
       uber:'Uber will plan to announce new trips',
       contact:'Contact',


  };
  const jsonData = JSON.stringify(upcoming);

   
  return (
    <View style={styles.UpcomTrippg_main}>
      <View style={styles.UpcomTrippg_frst_cont}>
      <Text style={styles.UpcomTrippg_frst_txt}>{upcoming.uber}</Text>
      <TouchableOpacity style={styles.UpcomingTrips_contct_btn}>
          <Text style={styles.UpcomingTrips_contct_btn_txt}>{upcoming.contact}</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default Upcomingtrips