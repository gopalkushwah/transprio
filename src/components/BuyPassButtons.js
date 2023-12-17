import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BuyPassBtn from './common/BuyPassBtn'
import { useNavigation } from '@react-navigation/native'

const BuyPassButtons = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
          <BuyPassBtn 
            title={'Bus Pass'} 
            icon={'badge'} iconSize={20} 
            iconColor={'white'}
            ></BuyPassBtn>
          <BuyPassBtn 
            title={'Card Recharge'} 
            icon={'credit-card'} 
            iconSize={20} 
            iconColor={'white'}
            ></BuyPassBtn>
          <BuyPassBtn 
            title={'Pay for ticket'} 
            icon={'monetization-on'} 
            iconSize={20} 
            iconColor={'white'}
            handler={()=>navigation.navigate('PayForTicket')}
            ></BuyPassBtn>
      </View>
  )
}

export default BuyPassButtons

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    marginHorizontal:13
  }
})