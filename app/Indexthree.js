import { StyleSheet, Text, View, useColorScheme,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';



const Indexthree = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.container, themeContainerStyle]}>
    <View style={styles.context}>
      
     <Image source={require('../assets/images/imagetwo.png')}/>
    </View>
    <View style={[styles.context2, themeContainerStyle]}>
     <Text style={[styles.text, themeTextStyle]}> <Text style={{color:"#3669C9"}}>Effortless</Text> Shopping at 
 {'\n'}Your Fingertips</Text>
     <Text style={[styles.texts, themeTextStyle]}>With a user-friendly interface, {'\n'} shopping for your baby has never been {'\n'} this easy.</Text>

     <View style={[styles.context3, themeContainerStyle]}>
     <TouchableOpacity style={styles.buttom} onPress={() => router.push('Home')}>
      <Text style={styles.textss} >Create Account</Text>
     </TouchableOpacity>
     </View>
    {/* <View style={[styles.context3, themeContainerStyle]}>
    <View style={[styles.context4, themeContainerStyle]}>
    <View style={[styles.buttoms, themeTextStyle]}></View>
    <View style={[styles.buttoms, themeTextStyle]}></View>
    <View style={[styles.buttom, themeTextStyle]}></View>
    </View>
    <View style={styles.arrow} >
    <AntDesign name="arrowright" size={20} color="#ffff" onPress={() => router.push('Indexthree')} />
    </View>
    </View> */}
    </View>
   </View>
  )
}

export default Indexthree

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
    alignItems:"center"
  },
  buttom:{
    backgroundColor:"#3669C9",
    width:'70%',
    marginTop: '10%',
    padding: 10,
    borderRadius: 20,
    // display:"flex",
    justifyContent:"center",
    alignItems:"center"
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

})