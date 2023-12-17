import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

const Headings = ({title,handler,marginHorizontal}) => {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:marginHorizontal
    }}>
      <Text style={styles.title}>{title}</Text>
      <Pressable><Text style={styles.seeAll}>See All</Text></Pressable>
    </View>
  )
}

export default Headings

const styles = StyleSheet.create({
  seeAll:{
    color:colors.second,
    fontSize:14,
    fontWeight:'500',
    fontFamily: fonts.PoppinsMedium
  },
  title:{
    color:'black',
    fontSize:16,
    fontFamily: fonts.PoppinsBold
  },
})