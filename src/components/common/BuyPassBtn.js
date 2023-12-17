import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
const BuyPassBtn = ({title,icon,iconSize,iconColor,handler}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handler}>
      <View
            activeOpacity={0.7}
            style={styles.icon}>
                <Icons name={icon} size={iconSize} color={iconColor} ></Icons>
        </View>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BuyPassBtn

const styles = StyleSheet.create({
  container : {
    flexDirection:'row',
    width:'48%',
    alignItems:'center',
    backgroundColor:'white',
    margin:'1%',
    marginVertical:5,
    elevation:1,
    borderRadius:5
  },
  icon : {
    borderRadius:50,
    backgroundColor: colors.main,
    margin:5,
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  title : {
    color:'black',
    marginLeft:3,
    fontSize:12,
    fontFamily: fonts.PoppinsMedium
  },
  // icon : {},
})