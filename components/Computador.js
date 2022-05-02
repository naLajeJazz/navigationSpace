import React,{Fragment} from 'react';
import TituloView from './TituloView';
import Caixa from './Caixa'
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View,  } from 'react-native';

export default () => {
  return (

<Fragment style={Estilo.container}>

    <TituloView corFundo="#010D26" corTexto="#05F2F2" position="flex-start">
          Ship Computer
    </TituloView>

<View style={Estilo.borda}>


    
    <View style={Estilo.container2}>
     
      <Caixa/>
      <Caixa/>
      <Caixa/>
      <Caixa/>
      
     </View>
   
    <View style={Estilo.container2}>
     
      <Caixa/>
      <Caixa/>
      <Caixa/>
      <Caixa/>
      
     </View>
    <View style={Estilo.container2}>
     
      <Caixa/>
      <Caixa/>
      <Caixa/>
      <Caixa/>
      
     </View>
    <View style={Estilo.container2}>
     
      <Caixa/>
      <Caixa/>
      <Caixa/>
      <Caixa/>
      
     </View>
   


</View>
    

    </Fragment>
  );
};
