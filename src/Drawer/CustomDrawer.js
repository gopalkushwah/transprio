import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import fonts from '../constants/fonts';
import Divider from '../components/common/Divider';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView

      >
        <TouchableOpacity
         style={styles.profileContainer} 
         activeOpacity={0.7}
         >
            <View style={styles.profileBtn}>
                <Icons name='person' size={30} color={'white'}></Icons>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.userName} numberOfLines={1}>Foo Bar</Text>
                <Text style={styles.viewProfile}>View Profile</Text>
            </View>
        </TouchableOpacity>
        <Divider height={7}></Divider>
        <View style={styles.secondSection}>
            <SecondSectionButton title={'Your Ticket / Passes'} iconName={'confirmation-number'} iconSize={25}/>
            <SecondSectionButton title={'Stops and Stations'} iconName={'room'} iconSize={25}/>
            <SecondSectionButton title={'Favorites'} iconName={'grade'} iconSize={25}/>
            <SecondSectionButton title={'Bus Map'} iconName={'map'} iconSize={25}/>
            <SecondSectionButton title={'Card Recharges'} iconName={'credit-card'} iconSize={25}/>
        </View>
        <Divider height={7}></Divider>
        <View style={styles.secondSection}>
            <SecondSectionButton title={'Support'} iconName={'contact-support'} iconSize={25} handler={()=>navigation.navigate('HelpAndSupport')}/>
            <SecondSectionButton title={'Change Language'} iconName={'language'} iconSize={25}/>
            <SecondSectionButton title={'Change City'} iconName={'not-listed-location'} iconSize={25}/>
        </View>
        <Divider height={7}></Divider>
        <View style={styles.secondSection}>
            <SecondSectionButton title={'Share With Friends'} iconName={'share'} iconSize={25}/>
        </View>
        <View style={styles.secondSection}>
            <Text style={{fontFamily: fonts.PoppinsMedium,color:'black'}}>Follow us on</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'blue',width:35,height:35,borderRadius:4,alignItems:'center',justifyContent:'center'}}>
                    <Icons name='facebook' color={'white'} size={20}></Icons>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#008fff',padding :5,borderRadius:4,marginLeft:20,width:35,height:35,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='twitter' color={'white'} size={20}></Icon>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'red',padding :5,borderRadius:4,marginLeft:20,width:35,height:35,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='youtube' color={'white'} size={20}></Icon>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#008fff',padding :5,borderRadius:4,marginLeft:20,width:35,height:35,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='linkedin' color={'white'} size={20}></Icon>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'#E74292',padding :5,borderRadius:4,marginLeft:20,width:35,height:35,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='instagram' color={'white'} size={20}></Icon>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

const SecondSectionButton = ({title,handler,iconSize, iconName})=>{
    return <TouchableOpacity
        activeOpacity={0.7} 
        onPress={handler}
        style={{
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            marginVertical:5
        }}>
        <Icons name={iconName} color={'black'} size={iconSize}></Icons>
        <Text style={styles.secondSectionBtnText}>{title}</Text>
    </TouchableOpacity>
}
export default CustomDrawer

const styles = StyleSheet.create({
    profileBtn :{
        borderRadius:50,
        backgroundColor:'#000000',
        marginTop:10,
        marginLeft:10,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    profileContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },
    userName : {
        color:'black',
        fontFamily: fonts.PoppinsMedium,
        fontSize: 17,
    },
    viewProfile : {
        color: '#888888',
        fontFamily: fonts.PoppinsLight,
        fontSize:11
    },
    nameContainer : {
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:12
    },
    secondSection : {
        padding:10,
    },
    secondSectionBtnText : {
        marginLeft:17,
        color:'#555555',
        fontFamily: fonts.PoppinsMedium,
        textAlignVertical:'center',
        
    },
    // userName : {},
    // userName : {},
    // userName : {},
    // userName : {},
    // userName : {},
})