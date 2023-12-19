import {Text, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import fonts from '../../constants/fonts';

const Accordion = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleAccordion}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderColor: 'white' }}>
            <Text style={{ fontFamily: fonts.PoppinsMedium, color:'black',fontSize:15}}>{title}</Text>
            <Text style={{ fontFamily: fonts.PoppinsMedium, color:'black',fontSize:15}}>{isExpanded ? '-' : '+'}</Text>
          </View>
        </TouchableOpacity>
  
        {isExpanded && (
          <View style={{ padding: 20 ,backgroundColor:'white'}}>
            {children}
          </View>
        )}
      </View>
    );
};
export default Accordion