import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const CustomMapView = () => {
  return (
    <View style={{width:'100%',height:'100%',flex:1}}>
      <MapView
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      
          initialRegion={{
            latitude: 30.733115,
            longitude: 76.779419,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421

          }}
          provider={PROVIDER_GOOGLE}
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
          <Marker
          draggable
          coordinate={{
            latitude: 30.945454,
            longitude: 76.5464,
          }}
          onDragEnd={(e)=>Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
          title='Test Marker'
          description='This is a description'
          ></Marker>
        </MapView>
    </View>
  )
}

export default CustomMapView

const styles = StyleSheet.create({})