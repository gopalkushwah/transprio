import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import fonts from '../constants/fonts'
import colors from '../constants/colors'

const PayForTicket = () => {
  return (
    <View style={styles.container}>
        <TextInput
        placeholder='Enter route number'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        ></TextInput>
        <TextInput
        placeholder='Enter route number'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        ></TextInput>
        <TextInput
        placeholder='Enter route number'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        ></TextInput>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        ><Text style={styles.btnText}>NEXT</Text></TouchableOpacity>
    </View>
  )
}

export default PayForTicket

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