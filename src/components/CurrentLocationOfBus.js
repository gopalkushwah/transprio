import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const CurrentLocationOfBus = ({route}) => {
    const item = route.params.item;
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
              zoomEnabled
            >
                <Marker
                    draggable
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude,
                    }}
                    onDragEnd={(e) => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
                    title={item.title}
                    description={item.description}
                ></Marker>
            </MapView>
        </View>
      )
}

export default CurrentLocationOfBus

const styles = StyleSheet.create({})