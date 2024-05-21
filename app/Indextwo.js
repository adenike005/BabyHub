import { StyleSheet, Text, View, useColorScheme,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';



const Indextwo = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.container, themeContainerStyle]}>
    <View style={styles.context}>
      <Text  style={[themeTextStyle, styles.skip]} onPress={() => router.push('Indexthree')}>Skip</Text>
     <Image source={require('../assets/images/imageone.png')}/>
    </View>
    <View style={[styles.context2, themeContainerStyle]}>
     <Text style={[styles.text, themeTextStyle]}> <Text style={{color:"#3669C9"}}>Real-Time</Text> Order 
 {'\n'} Tracking</Text>
     <Text style={[styles.texts, themeTextStyle]}>Track your orders in real-time and know {'\n'}exactly when they'll arrive at your  {'\n'} doorstep.</Text>
    <View style={[styles.context3, themeContainerStyle]}>
    <View style={[styles.context4, themeContainerStyle]}>
    <View style={[styles.buttoms, themeTextStyle]}></View>
    <View style={[styles.buttom, themeTextStyle]}></View>
    <View style={[styles.buttoms, themeTextStyle]}></View>
    </View>
    <View style={styles.arrow} >
    <AntDesign name="arrowright" size={20} color="#ffff" onPress={() => router.push('Indexthree')} />
    </View>
    </View>
    </View>
   </View>
  )
}

export default Indextwo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
text: {
    fontSize: 35,
    textAlign:'center',
    marginTop: '10%',
    fontFamily: 'LexendBlack',
    fontWeight: '900',
  },
  texts: {
    fontSize: 23,
    textAlign:'center',
    marginTop: '3%',
    fontFamily: 'LexendLight',
    fontWeight: '100',
  },
  textss: {
    fontSize: 23,
    // textAlign:'center',
    marginTop: '3%',
    fontFamily: '',
    fontWeight: '100',
    color:"#ffffff",
  },
lightContainer: {
    backgroundColor: '#ffff',
  },
  darkContainer: {
    backgroundColor: '#000000',
  },
  lightThemeText: {
    color: '#000000',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  context:{
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  context2:{
   paddingHorizontal: '5%',
   marginTop:"-70%",
   elevation: 100,
   height: '100%',
   borderTopRightRadius: 15,
   borderTopLeftRadius: 15,
   borderWidth: 2,
   borderTopColor: '#3669C9',
   borderBottomWidth: 0,
   borderLeftWidth: 0,
   borderRightWidth: 0,
  },
  context3:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginTop: '10%'
  },
  context4:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
   
  },
  buttom:{
    backgroundColor:"#3669C9",
    width:18,
    height: 18,
    marginTop: '10%',
    borderRadius: 9,
    margin: 5
  },
  buttoms:{
    backgroundColor:"#AABBCC",
    width:10,
    height: 10,
    marginTop: '10%',
    borderRadius: 5,
    margin: 5
  },
  skip: {
    position: "absolute",
    top: 20,
    right: 10,
    margin: 20, // Adjust the margin as needed for spacing from the edges
    color: "#3669C9", // Assuming you want the text to be white
    zIndex: 1, // Ensure it's above other elements
    fontSize: 20,
  },
  arrow:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3669C9',
    position: 'absolute',
    top: 0,
    right: 10,
    justifyContent:"center",
    alignItems:"center",
    display:"flex"
  }
})