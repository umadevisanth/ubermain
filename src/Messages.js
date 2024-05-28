import { View, Text, StatusBar, Image } from 'react-native';
import React from 'react';
import BackNavigator from './BackNavigator';  // Import BackNavigator component
import styles from './styles';  // Import styles

const Messages = () => {
  // Data for the messages screen
  const messageData = {
    messageUptodate: "You are all up to date!",
    messageResult: "No new messages available at the moment, come back soon to discover new offers"
  };

  return (
    // Main container for the messages screen
    <View style={styles.Messages_main_cont}>
      <View style={styles.Messages_sub_cont}>
        {/* BackNavigator component with title */}
        <BackNavigator titleName="Messages" />
        <View style={styles.Messages_content}>
          {/* Container for the image */}
          <View style={styles.Messages_frst_cont}>
            <Image style={styles.Messages_frst_cont_img} source={require('../assets/Images/Group.png')} />
          </View>
          {/* Container for the message text */}
          <View style={styles.Messages_second_cont}>
            <Text style={styles.Messages_content_frsttext}>{messageData.messageUptodate}</Text>
            <Text style={styles.Messages_content_scndtext}>{messageData.messageResult}</Text>
          </View>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}

export default Messages;
