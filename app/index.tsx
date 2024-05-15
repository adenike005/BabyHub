import { StyleSheet, Text, View, useColorScheme,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


import { StatusBar } from 'expo-status-bar';

const welcome = () => {
  const router = useRouter();
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.container, themeContainerStyle]}>
     <View style={styles.context}>
      <Image source={require('../assets/images/Rect.png')}/>
     </View>
     <View style={[styles.context2, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}> <Text style={{color:'#3669C9'}}>Welcome </Text> to BabyHub!</Text>
      <Text style={[styles.texts, themeTextStyle]}>Explore a world of convenience and joy for you and your little one.</Text>
     <View style={[styles.context3, themeContainerStyle]}>
     <TouchableOpacity style={styles.buttom} onPress={() => router.push('welcome')}>
      <Text style={styles.textss} >Let’s Get Started</Text>
     </TouchableOpacity>
     </View>
     </View>
    </View>
  )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    text: {
        fontSize: 35,
        textAlign:'center',
        marginTop: '15%',
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
        marginTop:'15%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      context2:{
       paddingHorizontal: '5%',
       marginTop:"-15%",
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
      }
})
