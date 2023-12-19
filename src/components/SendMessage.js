import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import fonts from '../constants/fonts'
import colors from '../constants/colors'

const SendMessage = () => {
  return (
    <View style={styles.container}>
        <TextInput
        placeholder='Enter Your Email'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        keyboardType='email-address'
        ></TextInput>
        <TextInput
        placeholder='Enter Phone Number'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        keyboardType='number-pad'
        ></TextInput>
        <TextInput
        placeholder='Write your issue'
        placeholderTextColor={'#555555'}
        style={[styles.textInput]}
        multiline
        numberOfLines={10}
        ></TextInput>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        ><Text style={styles.btnText}>NEXT</Text></TouchableOpacity>
    </View>
  )
}

export default SendMessage

const styles = StyleSheet.create({
  container:{
      width:'100%',
      paddingHorizontal:15,
  },
  textInput:{
      fontFamily: fonts.PoppinsMedium,
      borderBottomWidth:1,
      borderBottomColor : '#555555',
      color:'black',
      marginBottom:10,
      paddingVertical : 15
  },
  button:{
      backgroundColor: colors.main,
      padding: 16,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:4,
      marginTop:15
  },
  btnText:{
      fontFamily: fonts.PoppinsBold,
      color:'white'
  },
})