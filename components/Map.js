import React,{Fragment,useState} from 'react';
import Componente from './Componente';
import TituloView from './TituloView';
import CaixaMap from './CaixaMap';
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View,Text  } from 'react-native';

export default () => {
const simbol=['.','•','','','','','','','']

const [territorio1,setTerritorio1]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio2,setTerritorio2]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio3,setTerritorio3]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio4,setTerritorio4]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio5,setTerritorio5]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio6,setTerritorio6]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio7,setTerritorio7]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio8,setTerritorio8]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio9,setTerritorio9]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio10,setTerritorio10]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio11,setTerritorio11]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio12,setTerritorio12]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio13,setTerritorio13]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio14,setTerritorio14]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio15,setTerritorio15]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio16,setTerritorio16]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio17,setTerritorio17]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio18,setTerritorio18]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio19,setTerritorio19]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio20,setTerritorio20]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio21,setTerritorio21]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio22,setTerritorio22]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio23,setTerritorio23]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio24,setTerritorio24]=useState(simbol[Math.floor(Math.random()*simbol.length )])
const [territorio25,setTerritorio25]=useState(simbol[Math.floor(Math.random()*simbol.length )])



  return (

<Fragment >


<View style={Estilo.containerMapa}>
<CaixaMap>{territorio1}</CaixaMap>
<CaixaMap>{territorio2}</CaixaMap>
<CaixaMap>{territorio3}</CaixaMap>
<CaixaMap>{territorio4}</CaixaMap>
<CaixaMap>{territorio5}</CaixaMap>

</View>
<View style={Estilo.containerMapa}>
<CaixaMap>{territorio6}</CaixaMap>
<CaixaMap>{territorio7}</CaixaMap>
<CaixaMap>{territorio8}</CaixaMap>
<CaixaMap>{territorio9}</CaixaMap>
<CaixaMap>{territorio10}</CaixaMap>

</View>
<View style={Estilo.containerMapa}>
<CaixaMap>{territorio11}</CaixaMap>
<CaixaMap>{territorio12}</CaixaMap>
<CaixaMap>{territorio13}</CaixaMap>
<CaixaMap>{territorio14}</CaixaMap>
<CaixaMap>{territorio15}</CaixaMap>

</View>
<View style={Estilo.containerMapa}>
<CaixaMap>{territorio16}</CaixaMap>
<CaixaMap>{territorio17}</CaixaMap>
<CaixaMap>{territorio18}</CaixaMap>
<CaixaMap>{territorio19}</CaixaMap>
<CaixaMap>{territorio20}</CaixaMap>

</View>
<View style={Estilo.containerMapa}>
<CaixaMap>{territorio21}</CaixaMap>
<CaixaMap>{territorio22}</CaixaMap>
<CaixaMap>{territorio23}</CaixaMap>
<CaixaMap>{territorio24}</CaixaMap>
<CaixaMap>{territorio25}</CaixaMap>

</View>




</Fragment>

    

    
  )
};
