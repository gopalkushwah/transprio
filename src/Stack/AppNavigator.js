import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Parent from '../components/Parent';
import Home from '../components/Home';
import PayForTicket from '../components/PayForTicket';
import fonts from '../constants/fonts';
import HelpAndSupport from '../components/HelpAndSupport';
import SendMessage from '../components/SendMessage';
import CustomMapView from '../components/CustomMapView';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            component={Parent} 
            name='Parent'
            options={{
              headerShown:false
            }}
            ></Stack.Screen>
            <Stack.Screen 
              component={Home} 
              name='Home'

            ></Stack.Screen>
            <Stack.Screen 
              component={PayForTicket} 
              name='PayForTicket'
              options={{
                headerTitle:'Select Trip',
                headerTitleStyle:{
                  fontFamily: fonts.PoppinsMedium
                }
              }}
            ></Stack.Screen>
            <Stack.Screen 
              component={HelpAndSupport} 
              name='HelpAndSupport'
              options={{
                headerTitle:'Help And Support',
                headerTitleStyle:{
                  fontFamily: fonts.PoppinsMedium
                }
              }}
            ></Stack.Screen>
            <Stack.Screen 
              component={SendMessage} 
              name='SendMessage'
              options={{
                headerTitle:'Send Message',
                headerTitleStyle:{
                  fontFamily: fonts.PoppinsMedium
                }
              }}
            ></Stack.Screen>
            <Stack.Screen 
              component={CustomMapView} 
              name='CustomMapView'
              options={{
                headerTitle:'Map',
                headerTitleStyle:{
                  fontFamily: fonts.PoppinsMedium
                }
              }}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})