import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native'
import React, { useState } from 'react'
import fonts from '../constants/fonts';
import Accordion from './common/Accordion';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const HelpAndSupport = () => {
    const navigation = useNavigation();
  return (
    <>
      <View style={{height:'90%'}}>
        <ScrollView>
        <Accordion title={"Tracking a bus"}>
            <Text style={{ fontFamily: fonts.PoppinsLight, color:'black',textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat nostrum quaerat ducimus? Sint, aspernatur magnam dolor maxime, officiis ea ad tenetur veritatis, natus est ipsa dolore ullam ipsum!
            </Text>
        </Accordion>
        <Accordion title={"Mobile Bus Pass"}>
            <Text style={{ fontFamily: fonts.PoppinsLight, color:'black',textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat nostrum quaerat ducimus? Sint, aspernatur magnam dolor maxime, officiis ea ad tenetur veritatis, natus est ipsa dolore ullam ipsum!
            </Text>
        </Accordion>
        <Accordion title={"Bus Services Issues"}>
            <Text style={{ fontFamily: fonts.PoppinsLight, color:'black',textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat nostrum quaerat ducimus? Sint, aspernatur magnam dolor maxime, officiis ea ad tenetur veritatis, natus est ipsa dolore ullam ipsum!
            </Text>
        </Accordion>
        <Accordion title={"Payment Related Issues"}>
            <Text style={{ fontFamily: fonts.PoppinsLight, color:'black',textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat nostrum quaerat ducimus? Sint, aspernatur magnam dolor maxime, officiis ea ad tenetur veritatis, natus est ipsa dolore ullam ipsum!
            </Text>
        </Accordion>
        
      </ScrollView>

      
    </View>
    <TouchableOpacity
        style={styles.bottomBtn}
        activeOpacity={0.8}
        onPress={()=>navigation.navigate('SendMessage')}
        >
            <Text
            style={styles.btnText}
            >Send Message</Text>
        </TouchableOpacity>
    </>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({
    bottomBtn: {
        position:'absolute',
        width:'90%',
        bottom:10,
        height: 50,
        alignItems:'center',
        backgroundColor: colors.main,
        justifyContent:'center',
        borderRadius:50,
        marginHorizontal:18
    },
    btnText : {
        fontFamily: fonts.PoppinsBold,
        fontSize: 20,
        color: 'white'
    }
})
