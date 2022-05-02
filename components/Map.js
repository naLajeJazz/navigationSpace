import React,{Fragment} from 'react';
import Componente from './Componente';
import TituloView from './TituloView';
import CaixaMap from './CaixaMap';
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View,Text  } from 'react-native';

export default () => {
  return (

<Fragment >


<View style={Estilo.containerMapa}>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
</View>

<View style={Estilo.containerMapa}>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
</View>

<View style={Estilo.containerMapa}>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
</View>

<View style={Estilo.containerMapa}>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
<CaixaMap>○</CaixaMap>
</View>




    



  



</Fragment>

    

    
  )
};
