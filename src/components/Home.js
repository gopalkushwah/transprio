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
            onDragEnd={(e) => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
            title='Test Marker'
            description='This is a description'
          ></Marker>
          <Marker
            draggable
            coordinate={{
              latitude: 30.945454,
              longitude: 76.5464,
            }}
            onDragEnd={(e) => Alert.alert(JSON.stringify(e.nativeEvent.coordinate))}
            title='Test Marker'
            description='This is a description'
          ></Marker>
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