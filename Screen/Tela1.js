import React from 'react';
import TituloView from '../components/TituloView';
import Tripulante from '../components/Tripulante/components/Tripulante';
import DiaHoras from '../components/Tripulante/components/DiaHoras';
import { View } from 'react-native';
import Estilo from '../components/Cpu/EstiloCpu/EstiloCpu';


export default () => {
 
  ////props.navigation.navigate('Tela1'); 

  return (
   

      <View style={Estilo.container}>

      

<DiaHoras/>



<Tripulante/>

      
      
     </View>
  );
};
