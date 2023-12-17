import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons  from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const CustomHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={{
        height:130
    }}>
        <View style={styles.profileContainer}>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=>navigation.openDrawer()}
            style={styles.profileBtn}>
                <Icons name='person' size={30} color={'black'}></Icons>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}><Text style={styles.dot}>.</Text>TransPrio<Text style={styles.dot}>.</Text></Text>
            </View>
        </View>
        <View style={styles.searchSection}>
            <Icons style={styles.searchIcon} name="search" size={20} color="#000"/>
            <TextInput
            style={styles.input}
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
            placeholder='Enter destination or bus number'
            placeholderTextColor={'#888888'}
            />
        </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation:5,
        borderRadius:50,
        position:'absolute',
        top:70,
        width:'90%',
        left:20
    },
    searchIcon: {
        padding: 10,
        fontSize:25
    },

    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        borderBottomRightRadius:50,
        borderTopRightRadius:50,
        backgroundColor: '#fff',
        color: '#424242',
        fontFamily: fonts.PoppinsMedium
    },
    profileBtn :{
        borderRadius:50,
        backgroundColor:'#ffffff',
        marginTop:10,
        marginLeft:10,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    profileContainer : {
        flexDirection:'row',
        backgroundColor:colors.main,
        paddingBottom:30,
        borderBottomStartRadius:50,
        borderBottomEndRadius:50,
    },
    logoContainer : {
        alignItems:'center',
        justifyContent:'center',
        marginLeft:40
    },
    logoText : {
        color:'white',
        fontSize:30,
        fontFamily: fonts.PoppinsBold,
        textTransform:'uppercase'
    },
    dot : {
        color:'red',
        fontFamily: fonts.PoppinsBold,
        fontSize:35,
    }
})