import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Globalstyle from "./Globalstyles";  // Importing global styles
import { Feather } from '@expo/vector-icons';

const Packages = () => {

    const pack={
        send:'What to send',
        pack:'Send packages with Connect',
        deliver:'Get it delivered in the time it takes to drive there',
        sends:'Send a package',
        receive:'Receive a package',

    };
    const jsonData = JSON.stringify(pack);  // Convert pack object to JSON string (though unused)

  const navigation = useNavigation();  // Hook to get navigation object

  return (
    <View style={Globalstyle.container}>
      <ScrollView>
        {/* Header section with back button and info button */}
        <View style={Globalstyle.headerContainer}>
          <TouchableOpacity style={Globalstyle.iconBackContainer} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={26} color="#979797" />
          </TouchableOpacity>
          <TouchableOpacity style={Globalstyle.iconContact}>
            <Image source={require('../assets/Images/info.png')} />
            <Text style={Globalstyle.iconInfo}>{pack.send}</Text>
          </TouchableOpacity>
        </View>

        {/* Main content section */}
        <View style={Globalstyle.cntalin}>
          <View>
            <Image
              source={require('../assets/Images/img.png')}
              style={Globalstyle.imgdata}
            />
          </View>
          <View style={{ top: 50 }}>
            <Text style={Globalstyle.primrytext}>{pack.pack}</Text>
            <Text style={Globalstyle.Packagestxt}>{pack.deliver}</Text>

            {/* Button to navigate to SendPackages screen */}
            <TouchableOpacity style={Globalstyle.Packagebtn} onPress={() => {
              navigation.navigate('SendPackages');
            }}>
              <Text style={Globalstyle.Packagebtntxt}>{pack.sends}</Text>
            </TouchableOpacity>

            {/* Button to navigate to RecievingPackages screen */}
            <TouchableOpacity style={Globalstyle.Packagesrvcbtn} onPress={() => {
              navigation.navigate('RecievingPackages');
            }}>
              <Text style={Globalstyle.Packagebtntxt}>{pack.receive}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Packages;
