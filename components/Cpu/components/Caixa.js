import React from 'react';
import {View,TouchableOpacity,Text,Pressable} from 'react-native'
import Estilo from '../EstiloCpu/EstiloCpu';


export default (props) =>{



return(
<TouchableOpacity>
 

  
<View style={[Estilo.caixa,{backgroundColor:props.corfd, width:props.w, height:props.h, borderColor:props.bc}]}>

<Text style={[Estilo.caixa,{color:props.cor,fontSize:props.fs}]} >
{props.children}
  </Text>
</View>

</TouchableOpacity>







  )
}