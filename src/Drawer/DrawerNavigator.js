import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './../components/Home';
import CustomHeader from './CustomHeader';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
      
      }}
      drawerContent={()=><CustomDrawer/>}
    >
        <Drawer.Screen
          component={Home} 
          name='Home'
          options={{
              header:()=><CustomHeader navigation={navigation}/>
          }}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})