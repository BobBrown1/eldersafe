import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export const styles = StyleSheet.create({

  // Basic Styles
    container: {
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'space-between',
    },

    header: {
      flex: 1, 
      fontSize: 35, 
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'flex-start',
      marginLeft: horizontalScale(20),
    },

    subheader: {
      flex: 1,
      marginTop: verticalScale(10),
      marginLeft: horizontalScale(20),
      marginRight: horizontalScale(20),
      fontSize: moderateScale(20),
      color: 'white',
      alignSelf: 'flex-start',
    },
  
    // Home Page Styles
    scoreContainer: {
      width: 200, 
      height: 200, 
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 100, 
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: verticalScale(50),
    },
    score: {
      fontSize: moderateScale(50),
      fontWeight: 'bold',
      color: 'white',
    },
    scoreLabel: {
      fontSize: moderateScale(20),
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(20),
    },

    scoreLabelText: {
      fontSize: moderateScale(20),
      color: 'white',
      textAlign: 'center',
    },

    scoreLabelSubtext: {
      fontSize: moderateScale(15),
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(20),
      color: 'lightblue',
      textAlign: 'center',
    },

    dashboard: { 
      flex: 1,
      flexDirection: 'row',
      marginTop: verticalScale(50),
      width: '100%',
      justifyContent: 'space-evenly',
    },

    dashboardButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4a4a4a',
      borderRadius: moderateScale(10),
      borderWidth: moderateScale(0.5),
      borderColor: 'white',
      marginBottom: 3.5,
      marginRight: 15,
      marginLeft: 15,
      paddingVertical: verticalScale(15),
      paddingHorizontal: horizontalScale(10),
    },

    dashboardNumber: {
      fontSize: moderateScale(50),
      fontWeight: 'bold',
      color: 'white',
    },

    dashboardText: {
      fontSize: moderateScale(20),
      color: 'white',
      textAlign: 'center',
    },

    
    // Rooms Page Styles

    roomHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
    },

    plus: {
      fontSize: moderateScale(35),
      color: 'white',
      marginRight: horizontalScale(20),
    },

    noRooms: {
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: 'white',
    },

    room: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: verticalScale(100),
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginRight: horizontalScale(25),
      marginLeft: horizontalScale(25),
      backgroundColor: '#121212',
      color: 'white'
    },

    roomText: {
      fontSize: moderateScale(20),
      color: 'white',
    },

    currentRooms: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      marginTop: verticalScale(20),
    },

    roomFooter: {
      marginTop: verticalScale(20),
    },

    roomFooterText: {
      textAlign: 'center',
      color: 'white',
      fontSize: moderateScale(20),
      marginTop: verticalScale(20),
      textDecorationLine: 'underline',
    },

    roomHeaderCont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#24a0ed',
    },

    roomHeader: {
      position: 'absolute',
      alignItems: 'center',
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      color: 'white',
    },

    roomHeaderText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: moderateScale(25),
      textAlign: 'center',
      marginVertical: verticalScale(10),
    },

    backButton: {
      position: 'absolute',
      left: 0,
      marginLeft: horizontalScale(10),
      marginTop: verticalScale(10),
    },

    saveButton: {
      position: 'absolute',
      right: 0,
      marginRight: horizontalScale(10),
      marginTop: verticalScale(10),
    },

    saveText: {
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },

    inputHeader: {
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      textAlign: 'center',
      marginLeft: horizontalScale(25),
      marginRight: horizontalScale(25),
      marginTop: verticalScale(20),
      color: 'white',
    },

    inputContainer: {
      width: '80%',
      height: verticalScale(40),
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: verticalScale(20),
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
      fontSize: moderateScale(18),
      width: '100%',
      height: '100%',
      textAlign: 'left',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      color: 'white',
    },

    assessment: {
      flex: 1,
      flexDirection: 'column',
      marginTop: verticalScale(20),
      width: '100%',
    },

    assessmentText: {
      fontSize: moderateScale(20),
      width: '60%',
      color: 'white',
    },

    assessmentItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: '10%',
      marginLeft: '10%',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(10),
    },

    assessmentCheckbox: {
      width: horizontalScale(30),
      height: verticalScale(30),
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    assessmentButton: {
      backgroundColor: '#121212',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      width: '80%',
      height: verticalScale(40),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },

    assessmentButtonText: {
      color: 'white',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },

    roomAddedContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    roomAddedHeader: {
      fontSize: moderateScale(40),
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      marginBottom: '10%',
    },

    roomAddedText: {
      fontSize: moderateScale(20),
      textAlign: 'center',
      color: 'white',
      marginTop: '10%',
    },

    roomAddedButton: {
      backgroundColor: '#121212',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      width: '80%',
      height: verticalScale(40),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },

    roomAddedButtonText: {
      color: 'white',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },

    reportHeader: {
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      marginTop: verticalScale(30),
    },

    reportItem: {
      marginLeft: horizontalScale(25),
      marginRight: horizontalScale(25),
      marginTop: verticalScale(25),
      marginBottom: verticalScale(5),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '80%',
    },

    reportText: {
      fontSize: moderateScale(20),
      textAlign: 'left',
      color: 'white',
      marginLeft: horizontalScale(25),
    },

    reportButtons: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: verticalScale(20),
    },

    reportOK: {
      backgroundColor: '#121212',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      height: verticalScale(40),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: horizontalScale(25),
      marginRight: horizontalScale(25),
      marginTop: verticalScale(30),
    },

    reportOKText: {
      color: 'white',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },

    // Tips Page Styles

    tipsList: {
      width: '100%',
      marginTop: verticalScale(20),
    },

    noProductsText: {
      fontSize: moderateScale(20),
      textAlign: 'center',
      color: 'white',
      marginTop: '80%',
      marginHorizontal: horizontalScale(25),
    },

    tipSectionHeader: {
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      backgroundColor: '#121212',
      color: 'white',
      marginLeft: '5%',
      paddingTop: verticalScale(15),
    },

    tip: {
      width: '80%',   
      marginTop: verticalScale(5),
      marginBottom: verticalScale(5),
      borderRadius: 10,
      backgroundColor: '#121212',
      padding: horizontalScale(20),
      flexDirection: 'row',
      alignItems: 'center',
    },

    tipImage: {
      width: horizontalScale(80),
      height: verticalScale(80),
      borderRadius: 5,
    },

    tipTextContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: horizontalScale(20),
    },

    tipText: {
      fontSize: moderateScale(20),
      color: 'white',
      fontWeight: 'bold',
    },

    tipDescription: {
      fontSize: moderateScale(15),
      color: 'white',
      marginBottom: verticalScale(10),
    },

    tipImportance: {
      fontSize: moderateScale(15),
      color: 'white',
    },

    affiliateNote: {
      fontSize: moderateScale(15),
      color: 'white',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(20),
      marginLeft: horizontalScale(20),
    },

    hazardContainer: {
      width: '100%',
      height: '95%',
      marginTop: verticalScale(20),
      marginBottom: verticalScale(40),
      borderRadius: 10,
      backgroundColor: '#121212',
    },

    hazardHeader: {
      fontSize: moderateScale(25),
      fontWeight: 'bold',
      marginLeft: horizontalScale(25),
      marginBottom: verticalScale(10),
      color: 'white',
    },

    hazard: {
      marginTop: verticalScale(10),
      marginBottom: verticalScale(10),
      marginLeft: horizontalScale(25),
      marginRight: horizontalScale(25),
    },

    hazardLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%'
    },

    hazardIconStyle: {
      width: horizontalScale(75),
      color: 'white',
    },

    hazardIcon: {
      marginLeft: horizontalScale(20),
      marginRight: horizontalScale(20),
    },

    hazardText: {
      fontSize: moderateScale(20),
      color: 'white',
    },

    hazardRoom: {
      fontSize: moderateScale(15),
    },

    tipFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
    },

    tipFooterText: {
      fontSize: moderateScale(15),
      color: 'white',
    },

    tipFooterButton: {
      backgroundColor: '#121212',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      width: '80%',
      height: verticalScale(40),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },

    tipFooterButtonText: {
      color: 'white',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
    },

  });
  