import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Globalstyle = StyleSheet.create({
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

    
  })


export default GlobalStyle

const styles = StyleSheet.create({})