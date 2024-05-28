import { View, Text, SafeAreaView, Image, Icon, TouchableOpacity } from 'react-native';
import React from 'react';
import Globalstyle from './Globalstyle';  // Import global styles
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient for background gradient

const Login = () => {
  // Login details object
  const login = {
  
    move: 'Move with saftey',
    start: 'Get Started'
  };

  const navigation = useNavigation();  // Get navigation object
  const jsonData = JSON.stringify(login);  // Convert login object to JSON string (though unused)

  // Function to navigate to PhoneNumber screen
  const handleNavigate = () => {
    navigation.navigate('PhoneNumber');  // Navigate to 'PhoneNumber' screen
  };

  return (
    // Using LinearGradient for background color
    <LinearGradient
      colors={['#1976D2', '#535AFF']}
      style={Globalstyle.main}>
      
      {/* Main container */}
      <View style={Globalstyle.loginviewtexts}>
        <View style={Globalstyle.wholecont}>
          <View style={Globalstyle.whole}>
            {/* Touchable opacity for back navigation */}
            <TouchableOpacity onPress={() => navigation.goBack('Account')}>
              <View style={Globalstyle.arrowMain}>
                {/* Logo image */}
                <Image
                  source={require('../assets/Group49.png')} 
                  style={Globalstyle.loginlogoimage}
                />
                {/* Main logo image */}
                <Image
                  source={require('../assets/Grouplogo.png')}
                  style={Globalstyle.loginimagestyle}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={Globalstyle.iconwhole}>
            <TouchableOpacity>
              <View style={Globalstyle.icon}>
                {/* Safety text */}
                <Text style={Globalstyle.Login_saftey}>{login.move}</Text>
                {/* Shield icon image */}
                <Image
                  source={require('../assets/checkshield.png')}
                  style={Globalstyle.loginimageheight}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Globalstyle.Login_btncont}>
          {/* Button to navigate to PhoneNumber screen */}
          <TouchableOpacity onPress={handleNavigate}>
            <View>
              {/* Get Started button image */}
              <Image
                style={Globalstyle.getstart}
                source={require('../assets/Group52.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login;
