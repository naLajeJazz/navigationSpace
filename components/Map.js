import React,{Fragment,useState} from 'react';
import CaixaMap from './CaixaMap';
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View,Text  } from 'react-native';

export default () => {
const simbol=['.','•','',]

const [territorio1,setTerritorio1]=useState(simbol[Math.floor(Math.random()*simbol.length )])

  return (

<Fragment >

<View style={Estilo.containerMapa}>
<CaixaMap>{territorio1}</CaixaMap>
<CaixaMap>{territorio1}</CaixaMap>
<CaixaMap>{territorio1}</CaixaMap>
<CaixaMap>{territorio1}</CaixaMap>
<CaixaMap>{territorio1}</CaixaMap>
</View>

</Fragment>

        
  )
};
