import { StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Globalstyle = StyleSheet.create({

    main: {
        backgroundColor: '#276FDD',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    buttonviewtext: {
        marginTop: 10
    },
    paymentbuttontext: {
        marginBottom: 20
    },

    loginimageheight: {
        width: 41.83,
        height: 41.83
    },

    arrowMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    wholecont: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    whole: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 16.73,
        width: '100%',
        borderColor: '#fff',


    },

    accounttextview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    accountviewimage: {
        height: 181,
        width: 181,
        resizeMode: 'contain'
    },


    Account_text: {
        fontSize: 50,
        paddingTop: 50,
        color: '#EDF6FF'
    },

    Login_view: {
        borderWidth: 0,
        borderRadius: 20,
        width: '40%',
        height: 160,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },



    Login_text: {
        fontSize: 50,
        color: '#EDF6FF',
        textAlign: 'center'
    },

    Login_saftey: {
        fontSize: 20.83,
        color: '#EDF6FF',
        padding: 10,
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 27.65
    },

    Login_icon: {
        color: '#EDF6FF',
        fontSize: 20
    },

    Login_btncont: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal:wp('3%')
        // left: wp('3%'),
        // right: wp('3%'),
        width: wp('50%'),
    },

    Login_btn: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        width: 340,
        borderColor: '#fff'
    },


    Login_started: {
        fontSize: 25,
        color: '#EDF6FF',
        padding: 10,
        left: 60,
        fontFamily: 'Roboto',
        fontWeight: '700'
    },


    Login_arrow: {
        left: 100,
        top: 20,
        fontSize: 20,
        color: '#EDF6FF',
        right: 25
    },

    loginviewtexts: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconwhole: {
        marginTop: '25%',
        width: 251,
        height: 53


    },
    Phonenumber_cont: {
        backgroundColor: '#1A1A1A',
        flex: 1,
        width: '100%',
        padding: '4%'

    },
    Phone_left_cont: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '4%',
    },

    loginimagestyle: {
        height: 181,
        width: 171,
        position: 'absolute',
        right: 50
    },

    paymentsafeareaview: {
        backgroundColor: '#1A1A1A',
        height: '100%'
    },
    paymentviewtwxt: {
        flex: 1,
        margin: hp('2.5%'),
        top: hp('5%')
    },

    loginlogoimage: {

        position: 'relative',
        right: 20
    },

    paymentselection: {
        marginVertical: '2%',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: hp('2%')
    },

    paymentmethodoptions: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: hp('3%')
    },
    paymentmethodimage: {
        height: 50,
        width: 50
    },

    paymentnexttext: {
        color: 'white',
        fontSize: 21,
        textAlign: 'center',
        padding: 10
    },

    phonenumberimage: {
        width: 30,
        height: 20
    },

    phonenumberdisplayotp: {
        height: 20,
        width: 20,
        marginTop: 50,
        left: 40,
        color: '#535AFF'
    },


    Phone_left: {
        color: '#979797'
    },


    Phone_phonenumber: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: wp('7%'),
        marginVertical: 30,
        color: '#EDF6FF',
        fontFamily: 'Roboto',
        fontWeight: '500'



    },

    phonenumberotpsuccess: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20
    },

    phonenumberfootermessage: {
        color: '#EDF6FF',
        fontSize: 14,
        width: '90%',
        marginLeft: '0%',
        marginRight: '0%',
        fontFamily: 'Roboto',
        fontWeight: '500'
    },

    phonenumberfooternext: {
        color: '#EDF6FF',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },


   
    aline: {
        
        bottom: hp('3%'),
    },


    Phone_otp: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1%'),
        borderRadius: 20,
    },
    Phone_social: {
        marginTop: hp('3%'),
        color: '#535AFF',
        fontSize: 23,
        marginRight: '1%',
        fontFamily: 'Roboto',
        fontWeight: '500'
    },
    Phone_dropdown: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 20,
    },
    otpmsg: {
        alignItems: 'center',
        marginBottom: hp('5%'),
        top: hp('25%'),
        position: 'fixed',
        bottom: hp('6%')
    },
    enterotp:
    {
        marginTop: hp('3%'),
        fontSize: wp('4%'),
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },

    alertContainer: {
        backgroundColor: '#1D1D1D',
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 20,
        width: wp('100%'),
        right: wp('5%'),
        top: hp('13%')
    },
    alertMessage: {
        fontSize: wp('6%'),
        marginBottom: 20,
        textAlign: 'justify',
        color: '#EDF6FF',
    },
    button: {
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
    },
    addButton: {
        backgroundColor: '#000000',
    },
    addButtonText: {
        color: '#fff',
    },
    laterButton: {
        backgroundColor: '#000000',
        marginTop: hp('4%'),
        marginBottom: hp('4%'),
    },
    laterButtonText: {
        color: '#EDF6FF',
    },
    otp: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        marginTop: hp('1%'),
        color: '#EDF6FF'
    },
    btnnext: {
        backgroundColor: '#000000',
        padding: 10,
        alignItems: 'center',
        width: '88%',
        borderRadius: 5,
        marginBottom: hp('0%'),
        top: hp('3%'),
        bottom: hp('4%')
    },
    Phone_flag: {
        width: '10%',
        height: 15
    },
    Phone_drop: {
        width: '5%'
    },
    Phone_phonetext: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Phone_phoneinputtext: {
        fontSize: 15,
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        textAlign: 'left',
        paddingLeft: 10,
        width: '80%',
    },
    countrycode: {
        color: 'white',
        width: '15%'
    },
    Social_iconleft: {
        textAlign: 'left',
        color: '#979797'

    },


    Social_account: {
        color: '#EDF6FF',
        fontSize: 30
    },

    Social_facebookimage: {
        width: 30,
        height: 30
    },


    Social_facebook: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 30,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },

    Social_googleimage: {
        width: 30,
        height: 30
    },


    Social_google: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 30,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    socialsafeareaview: {
        backgroundColor: '#1A1A1A',
        height: '100%',
        padding: '5%'
    },

    socialnavigationbutton: {
        width: '90%',
        marginLeft: '1%',
        marginRight: 'auto',
        justifyContent: 'center',
        top: '1%',
        bottom: '5%'
    },

    socialaccountselection: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '5%'
    },

    socialsocialoptions: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    socialoptionview: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '14%'
    },

    socialviewtext: {
        display: 'flex',
        flexDirection: 'row'
    },

    socialcheckbox: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10%'
    },

    socialchecktextmsg: {
        color: '#EDF6FF',
        fontSize: 16,
        width: '80%',
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginLeft: '3%'
    },

    socialerrormsg: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    },



    socialdisablebutton: {
        color: '#EDF6FF',
        fontSize: 21,
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000000',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    firstsafeview: {
        backgroundColor: '#1A1A1A',
        height: '100%',
        padding: '6%'
    },

    firstviewtext: {
        width: '90%',
        marginRight: 'auto',
        justifyContent: 'center'
    },

    firstviewtexttext: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '5%'
    },


    First_left: {
        height: 25,
        width: 25,
        color: '#979797'
    },

    First_name: {
        color: '#EDF6FF',
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    First_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '5%',
        padding: '2%'
    },

    First_next: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        padding: 13,
        width: '85%',
        marginLeft: '10%',
        backgroundColor: '#000000',
        fontFamily: 'Roboto',
        fontWeight: '700'

    },
    success_next: {

        borderColor: '#EDF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        padding: 13,
        width: '85%',
        marginLeft: '10%',
        backgroundColor: '#2B2B2B',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    First_nexttext: {
        color: 'white',
        fontSize: 21
    },

    Profile_lefticon: {
        height: 25,
        width: 25,
        marginTop: 40,
        marginLeft: 30,
        color: '#979797'
    },


    Profile_profileimage: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 70
    },

    Profile_tapping: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#EDF6FF',
        fontSize: hp('3%'),
        lineHeight: hp('4%'),
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginTop: hp('4%')
    },

    Profile_text: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },

    profilesafetextview: {
        backgroundColor: '#1A1A1A',
        height: '100%'
    },

    Profile_check: {
        color: '#EDF6FF',
        fontSize: hp('2%'),
        lineHeight: 17.58,
        width: '90%',
        fontFamily: 'Roboto',
        fontWeight: '700',
        marginTop: hp('5%')
    },

    Profile_checked: {
        borderColor: '#EDF6FF',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp('4%'),
        backgroundColor: '#000000'
    },

    Profile_next: {
        color: 'white',
        fontSize: 21,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    ellipse: {
        height: 138,
        width: 138
    },
    icon_profile: {
        width: 95.65,
        height: 100,
        position: 'absolute',
        top: 10

    },
    ellipseimage: {
        width: 301.56,
        height: 283.47

    },

    whole_image: {
        position: 'relative'
    },


    Payment_icon: {
        color: '#EDF6FF'
    },

    Payment_later: {
        color: '#535AFF',
        fontSize: 20,
        lineHeight: 23.44,
        marginLeft: '50%',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    Payment_payment: {
        color: '#EDF6FF',
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: '500'
    },

    Payment_creditcard: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },

    Payment_debitcard: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top: hp('1.5%')
    },

    Payment_paytm: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },

    Paytm_text: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top: hp('1.5%')


    },

    Paytm_opacity: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },


    Paytm_cash: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top: hp('1.5%')


    },

    Payment_next: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        borderRadius: 2,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#000000',
        marginTop: '80%'

    },

    Later_request: {
        color: '#EDF6FF',
        fontSize: 23,
        marginVertical: 40
    },

    Later_add: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        padding: 10
    },

    Later_text: {
        color: '#EDF6FF',
        fontSize: 20,
        textAlign: 'center'
    },

    Later_btn: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        padding: 10
    },

    Later_later: {
        color: '#EDF6FF',
        fontSize: 20,
        textAlign: 'center'
    },
    // add new class
    firstError: {
        color: 'red',
        top: '5%',
        textAlign: 'left',
    },
    lastError: {
        color: 'red',
        top: '5%',
    },
    // login
    getstart: {
        
        width: wp('90%'),
        objectFit: 'fill'
    },
    success_lefticon: {
        height: 25,
        width: 25,
        
        color: '#979797'

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        paddingTop: 50, // Ensure there's space at the top for the header
      },
      header: {
        position: 'absolute',
        top: 20,
        left: 40,
        color:'#979797'
      },
      text: {
        fontSize: 24,
        marginBottom: 10,
        color: '#EDF6FF',
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      iconText: {
        marginLeft: 10,
        fontSize: 21,
        color: '#EDF6FF',
      },
      buttonContainer: {
        width: '80%', // Adjust the width as needed
        alignItems: 'center',
      },
      button: {
        width: '100%', // Button width should match container width
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFF',
        fontSize: 21,
      },
      uberText: {
        color: 'blue',
        fontSize:21
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1A1A1A',
        padding: '8%'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF'
      },
      detailContainer: {
        marginBottom: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EDF6FF'
      },
      value: {
        fontSize: 16,
        color: '#979797'
      },
      confirmButton: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#000000',
        alignItems: 'center',
        marginTop: 20,
      },
      confirmButtonText: {
        fontSize: 18,
        color: '#FFF'
      },
      map: {
        width: '100%',
        height: 200,
        marginTop: 20,
      },
      back: {
        left: wp('-2%')
      },
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#1A1A1A',
        padding: '8%'
      },
      locationContainer: {
        marginBottom: 10,
      },
      iconContainer: {
        alignSelf: 'center',
        padding: '5%'
      },
      input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#EDF6FF',
        borderRadius: 2,
        backgroundColor: '#000000',
        fontSize: 16,
        top: '4%',
        marginBottom: 10,
        color: '#979797'
      },
      inputError: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#000000',
        fontSize: 16,
        marginBottom: 10,
        color: '#979797'
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      dateTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        top: '2%'
      },
      dateTimeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 2,
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
        top: '2%'
      },
      dateTimeText: {
        fontSize: 16,
        color: '#979797'
      },
      submitButton: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#000000',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
      },
      submitButtonText: {
        fontSize: 18,
        color: '#FFF',
      },
      mapContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mapCont: {
        width: '100%',
        height: 200,
      },
      back: {
        left: wp('-2%')
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: wp('80%'),
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
      },
      confirmButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      confirmButtonText: {
        color: 'white',
        fontSize: 16,
      },
      cancelButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 5,
        alignItems: 'center',
      },
      cancelButtonText: {
        color: 'white',
        fontSize: 16,
      },
      containersuccess: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A'
    },
})



export default Globalstyle