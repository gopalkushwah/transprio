import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const CustomMapView = () => {
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
  return (
    <View style={{width:'100%',height:'100%',flex:1}}>
      <MapView
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      
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
  )
}

export default CustomMapView

const styles = StyleSheet.create({})