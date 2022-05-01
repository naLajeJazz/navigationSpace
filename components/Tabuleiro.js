import React,{Fragment} from 'react';
import Componente from './Componente';
import Caixa from './Caixa'
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View,  } from 'react-native';

export default () => {
  return (

<Fragment style={Estilo.container}>


    <View style={[Estilo.container,Estilo.borda]}>
      <Componente />
     
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
    <View style={Estilo.container2}>
     
      <Caixa/>
      <Caixa/>
      <Caixa/>
      <Caixa/>
      
     </View>
   
<View style={[Estilo.containerTxt,Estilo.borda]}>
      <Componente  />
      <Componente />
     
    </View>

    

    </Fragment>
  );
};
