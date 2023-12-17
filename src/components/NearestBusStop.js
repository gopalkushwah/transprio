import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Divider from './common/Divider'
import Icons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../constants/fonts';
import colors from '../constants/colors';

const NearestBusStop = () => {
  return (
    <View style={styles.nearestBusContainer}>
        <View style={{flex:1,flexDirection:'row'}}>
            <Icons name='bus-alert' size={25} color={'black'} style={{flex:.8}}></Icons>
            <Text style={styles.firstSection}>Bharat Talkies</Text>
            <Text style={styles.timeRemain}><Icons name='directions-walk'></Icons>3 min</Text>
        </View>
        <Text style={styles.nextBusText}>Next Bus</Text>
        <View style={{flex:1,flexDirection:'row',marginTop:10}}>
            <Icons name='directions-bus' size={25} color={'#888888'} style={{flex:.8}}></Icons>
            <View style={{flex:4}}>
              <Text style={styles.busNumber}>208</Text>
              <Text style={styles.toFrom}>To Piplani Petrol Pump</Text>
            </View>
            <Text style={styles.timeRemainToReach}><Icons name='rss-feed'></Icons>3 min</Text>
        </View>
        <Divider height={3}></Divider>
        <View style={{flex:1,flexDirection:'row',marginTop:10}}>
            <Icons name='directions-bus' size={25} color={'#888888'} style={{flex:.8}}></Icons>
            <View style={{flex:4}}>
              <Text style={styles.busNumber}>208</Text>
              <Text style={styles.toFrom}>To Kokta</Text>
            </View>
            <Text style={styles.timeRemainToReach}><Icons name='rss-feed'></Icons>3 min</Text>
        </View>
        <Divider height={3}></Divider>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity>
            <Text style={{color: colors.second,fontFamily: fonts.PoppinsBold}}>See all Busses</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}

export default NearestBusStop

const styles = StyleSheet.create({
    nearestBusContainer: {
        marginTop:20,
        marginHorizontal:13,
        padding:10,
        backgroundColor:'white',
        elevation:2,
        borderRadius:3,
        shadowOpacity:0.1,
        shadowOffset:{
          width:10,
          height:10
        }
      },
      
  firstSection: {
    color:'black',
    fontSize:17,
    flex:4,
    fontFamily: fonts.PoppinsMedium
  },
  timeRemain: {
    flex:1,
    color:'black',
    alignItems:'center',
    fontFamily: fonts.PoppinsExtraLight,
    fontSize:15
  },
  timeRemainToReach: {
    flex:1,
    color:'#0077ff',
    alignItems:'center',
    fontFamily: fonts.PoppinsMedium,
    fontSize:15
  },
  nextBusText: {
    color:'#555555',
    backgroundColor: '#efefef',
    width:100,
    fontFamily: fonts.PoppinsMedium,
    textAlign:'center',
    textAlignVertical:'center',
    marginVertical:10
  },
  busNumber: {
    color:'black',
    fontSize:17,
    flex:4,
    fontFamily: fonts.PoppinsMedium
  },
  toFrom: {
    color:'#888888',
    fontSize:12,
    flex:4,
    fontFamily: fonts.PoppinsMedium
  },
})