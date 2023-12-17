import {StyleSheet, Text, View,ScrollView ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import Headings from './common/Headings';
import Divider from './common/Divider';
import BuyPassButtons from './BuyPassButtons';
import Icons  from 'react-native-vector-icons/MaterialIcons';
import fonts from '../constants/fonts';
import colors from '../constants/colors';
import NearestBusStop from './NearestBusStop';
// import MapView, { Marker } from 'react-native-maps';
const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Headings title={'Buy mobile ticket / pass'} marginHorizontal={15}></Headings>
      <BuyPassButtons></BuyPassButtons>
      <Divider height={8}></Divider>
      <Headings title={'Nearest bus stop'} marginHorizontal={15}></Headings>
      <NearestBusStop/>
      <Divider height={8}></Divider>
      {/* <View style={{marginBottom:20,height:100,width:'100%'}}> */}
        {/* <MapView
          initialRegion={{
            latitude: 30.733115,
            longitude: 76.779419,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421

          }}
        >
          <Marker
          draggable
          coordinate={{
            latitude: 30.733115,
            longitude: 76.779419,
          }}
          onDragEnd={(e)=>Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
          title='Test Marker'
          description='This is a description'
          ></Marker>
        </MapView> */}
      {/* </View> */}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollView: {
    marginVertical:5,
    height:'100%'
  },
  
  // scrollView: {},
})