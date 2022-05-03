import React from 'react';
import { View } from 'react-native-web';
import Estilo from '../components/Cpu/EstiloCpu/EstiloCpu';
import Cpu from '../components/Cpu/components/Cpu';

export default () => {
 
  ////props.navigation.navigate('Tela1'); 

  return (
   <View style={Estilo.container} >

      <Cpu/>


   </View>

     
      
  
  );
};
