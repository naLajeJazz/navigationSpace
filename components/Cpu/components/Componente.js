import React,{useState} from 'react'
import {Text,View} from 'react-native'
import Estilo from '../EstiloCpu/EstiloCpu';

export default props =>{

const [dados,setDados]=useState('um dado')

return(
<View style={Estilo.borda}>

<Text style={Estilo.txt}>{dados}</Text>
</View>
  )
}