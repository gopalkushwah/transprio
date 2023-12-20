import { StyleSheet, Text, TextInput, TouchableOpacity, View ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import fonts from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';

const SearchBus = () => {
    const [userInput, setUserInput] = useState('');
    const [filteredMarkers, setFilteredMarkers] = useState([]);
    const navigation = useNavigation();

    const markers = [
        {
          latitude: 23.24914,
          longitude: 77.4686649,
          title: 'Piplani Petrol Pump',
          description : 'Bus is at Piplani Petrol Pump',
          root: 201
        },
        {
          latitude: 23.2512561,
          longitude: 77.4760726,
          title: 'Anand Nagar',
          description : 'Bus is at Anand Nagar',
          root: 208
        },
        {
          latitude: 23.2552163,
          longitude: 77.4197548,
          title: 'Ashoka Garden',
          description : 'Bus is at Ashoka Garden',
          root: 208
        },
        {
          latitude: 23.2502469,
          longitude: 77.4761707,
          title: 'Ratnagiri Bypass',
          description : 'Bus is at Ratnagiri Bypass',
          root:303
        },
        {
          latitude: 23.2629936,
          longitude: 77.5133828,
          title: 'Kokta bypass',
          description : 'Bus is at Kokta bypass',
          root:402
        },
        {
          latitude: 23.2512042,
          longitude: 77.5221699,
          title: 'LNCT - institute of technology',
          description : 'Bus is at LNCT - institute of technology',
          root: 311
        },
        {
          latitude: 23.2531076,
          longitude: 77.4162245,
          title: 'Oriental institute of technology',
          description : 'Bus is at Oriental institute of technology',
          root: 208
        },
        {
          latitude: 23.2568615,
          longitude: 77.505888,
          title: 'Trinity institute of technology & research bhopal',
          description : 'Bus is at Trinity institute of technology & research bhopal',
          root: 208
        },
      
      ]
      
      const handleInputChange = (text) => {
        setUserInput(text);
      };
    
      const handleFilterMarkers = () => {
        const rootNumber = parseInt(userInput, 10); // Convert input to integer if needed
        const filtered = markers.filter(marker => marker.root === rootNumber);
        setFilteredMarkers(filtered);
      };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Bus Root'
        placeholderTextColor={'#555555'}
        style={styles.textInput}
        onChangeText={handleInputChange}
        value={userInput}
        keyboardType='number-pad'
        ></TextInput>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleFilterMarkers}
        activeOpacity={0.8}
        ><Text style={styles.btnText}>SEARCH</Text></TouchableOpacity>
        <ScrollView style={{marginTop:10}}>
            {
                filteredMarkers.map( (item)  => (
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={()=>navigation.navigate("CurrentLocationOfBus",{item})}
                        style={{
                            height:70,
                            marginBottom:10,
                            borderRadius:4,
                            elevation:1,
                            flexDirection:'row',
                            backgroundColor:'white',
                            padding:10,
                            alignItems:'center'
                        }}>

                      <Text style={{color:'black',marginRight:20}}>{item.root}</Text>
                      <Text style={{color:'black'}}>{item.title}</Text>
                      
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    </View>
  )
}

export default SearchBus

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        paddingHorizontal:20
    },
    textInput:{
        fontFamily: fonts.PoppinsMedium,
        borderBottomWidth:1,
        borderBottomColor : '#555555',
        color:'black',
        marginBottom:10,
        paddingVertical : 15,
    },
    button:{
        backgroundColor: colors.main,
        padding: 16,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        marginTop:15
    },
    btnText:{
        fontFamily: fonts.PoppinsBold,
        color:'white'
    },
})