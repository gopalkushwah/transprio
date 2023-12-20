import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Button, Dimensions } from 'react-native'
import React from 'react'
import Headings from './common/Headings';
import Divider from './common/Divider';
import BuyPassButtons from './BuyPassButtons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../constants/fonts';
import colors from '../constants/colors';
import NearestBusStop from './NearestBusStop';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const markers = [
  {
    latitude: 23.24914,
    longitude: 77.4686649,
    title: 'Piplani Petrol Pump',
    description : 'Bus is at Piplani Petrol Pump'
  },
  {
    latitude: 23.2512561,
    longitude: 77.4760726,
    title: 'Anand Nagar',
    description : 'Bus is at Anand Nagar'
  },
  {
    latitude: 23.2552163,
    longitude: 77.4197548,
    title: 'Ashoka Garden',
    description : 'Bus is at Ashoka Garden'
  },
  {
    latitude: 23.2502469,
    longitude: 77.4761707,
    title: 'Ratnagiri Bypass',
    description : 'Bus is at Ratnagiri Bypass'
  },
  {
    latitude: 23.2629936,
    longitude: 77.5133828,
    title: 'Kokta bypass',
    description : 'Bus is at Kokta bypass'
  },
  {
    latitude: 23.2512042,
    longitude: 77.5221699,
    title: 'LNCT - institute of technology',
    description : 'Bus is at LNCT - institute of technology'
  },
  {
    latitude: 23.2531076,
    longitude: 77.4162245,
    title: 'Oriental institute of technology',
    description : 'Bus is at Oriental institute of technology'
  },
  {
    latitude: 23.2568615,
    longitude: 77.505888,
    title: 'Trinity institute of technology & research bhopal',
    description : 'Bus is at Trinity institute of technology & research bhopal'
  },

]


const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
      <Headings title={'Buy mobile ticket / pass'} marginHorizontal={15}></Headings>
      <BuyPassButtons></BuyPassButtons>
      <Divider height={8}></Divider>
      <Headings title={'Nearest bus stop'} marginHorizontal={15}></Headings>
      <NearestBusStop />
      <Divider height={8}></Divider>
      <View style={{height: 250, width: '100%',padding:15,marginBottom:5}}>
        <MapView
          style={{ width: '100%', height: Dimensions.get('window').height/3.5 ,borderRadius:10,backgroundColor:'white',elevation:5}}
          onPress={() => navigation.navigate("CustomMapView")}
          initialRegion={{
            latitude: 23.24914,
            longitude: 77.4686649,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421

          }}
          provider={PROVIDER_GOOGLE}
        >
          {
            markers.map((item,index)=>{
              return <Marker
                key={index}
                draggable
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                onDragEnd={(e) => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={item.title}
                description={item.description}
            ></Marker>
            })
          }
        </MapView>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 5,
    height: '100%'
  },

  // scrollView: {},
})