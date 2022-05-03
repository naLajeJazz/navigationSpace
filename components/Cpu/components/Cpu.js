import React,{Fragment} from 'react';
import Componente from './Componente';
import Caixa from './Caixa'
import Estilo from '../EstiloCpu/EstiloCpu';
import { View } from 'react-native';


export default () => {
  return (

<Fragment >


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
