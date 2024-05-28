import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const UberProfile = ({ navigation }) => {
    // Data for user account information
    const Accountdata = {
        "userName": "Dot Phasor",
        "mobile": "+91 8123456789",
        "Profileimg": "require('../assets/profile.png')", // Profile image (not used in this component)
        "MessagesText": "Messages",
        "Tripspage": "Your Trips",
        "Paymenttext": "Payment",
        "UberPasstext": "Uber Pass",
        "Settings": "Settings",
        "LegalText": "Legal",
        "legalversion": "v4.3722003" // Legal version information
    }

    return (
        <View style={styles.acnt_main_cntr}>
            {/* Profile Information Section */}
            <View style={styles.acnt_frst_cont}>
                <View style={styles.acnt_prfl_cont}>
                    {/* Profile Image */}
                    <TouchableOpacity style={styles.acnt_prfl_subcont1}>
                        <Image style={styles.acnt_prfl_img} source={require('../assets/Images/pexels-olly-774909.jpg')} />
                    </TouchableOpacity>
                    {/* User Name and Mobile Number */}
                    <View style={styles.acnt_prfl_subcont2}>
                        <Text style={styles.acnt_prfl_nm}>{Accountdata.userName}</Text>
                        <Text style={styles.acnt_prfl_nm}>{Accountdata.mobile}</Text>
                    </View>
                </View>
                {/* Messages Section */}
                <View style={styles.acnt_frst_msg_cont}>
                    <TouchableOpacity testID='Messages' onPress={() => { navigation.push('messages') }} style={styles.acnt_frst_msg_btn}>
                        <View style={styles.acnt_frst_msg_box}>
                            <Text style={styles.acnt_frst_msglbl}>{Accountdata.MessagesText}</Text>
                            {/* Notification Icon */}
                            <Image style={styles.acnt_notfction} source={require('../assets/Images/Ellipse4.png')} />
                        </View>
                        {/* Right Arrow Icon */}
                        <Image style={styles.acnt_frst_rgtarrow} source={require('../assets/Images/Vector10.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Account Actions Section */}
            <View style={styles.acnt_scnd_cont}>
                <View style={styles.acnt_scnd_cont_sub1}>
                    {/* Buttons for Trips, Payment, Uber Pass, and Settings */}
                    <TouchableOpacity testID='Trips' style={styles.acnt_scnd_cont_sub1_btnactns} onPress={() => { navigation.push('Trips') }}>
                        <Text style={styles.acnt_scnd_cont_sub1_btntxt}>{Accountdata.Tripspage}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='Payment' style={styles.acnt_scnd_cont_sub1_btnactns} onPress={() => { navigation.push('uberpayment') }}>
                        <Text style={styles.acnt_scnd_cont_sub1_btntxt}>{Accountdata.Paymenttext}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='Uberpass' style={styles.acnt_scnd_cont_sub1_btnactns} onPress={() => { navigation.push('UberPass') }}>
                        <Text style={styles.acnt_scnd_cont_sub1_btntxt}>{Accountdata.UberPasstext}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity testID='AccountSettings' style={styles.acnt_scnd_cont_sub1_btnactns} onPress={() => { navigation.push('UberSettings') }}>
                        <Text style={styles.acnt_scnd_cont_sub1_btntxt}>{Accountdata.Settings}</Text>
                    </TouchableOpacity>
                </View>
                {/* Legal Information */}
                <View style={styles.acnt_scnd_cont_sub2}>
                    <Text style={styles.acnt_scnd_cont_sub1_btntxt}>{Accountdata.LegalText}</Text>
                    <Text style={styles.acnt_scnd_cont_sub1_legaltxt}>{Accountdata.legalversion}</Text>
                </View>
            </View>
            {/* StatusBar */}
            <StatusBar />
        </View>
    )
}

export default UberProfile;
