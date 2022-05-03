import React,{useState,Fragment} from 'react';
import Caixa from './Caixa'
import Estilo from '../EstiloCpu/EstiloCpu';
import { View,Text,Pressable } from 'react-native';


export default () => {

const cores=['blue','red','green']
 
const [cor,setCor]=useState()
const [cor2,setCor2]=useState()
const [texto,setTexto]=useState('off')
const [textoMsg,setTextoMsg]=useState('')
const onPress = () =>{ if (texto=='off') { setCor('#30BFA5') ,setTexto('on'),setCor2('white'),setTextoMsg('sistema iniciado...') }
                  else if (texto=='on'){setCor('') ,setTexto('off'),setCor2(''), setTextoMsg('')}
}


  return (
<Fragment>


<View style={[Estilo.container,Estilo.borda]}>

<View>
<Caixa  cor='#4BF2D4' fs="64" ><Text >Cpu sistem </Text></Caixa>
<Caixa  cor='red' fs="64" ><Text >{textoMsg} </Text></Caixa>

</View>


</View>


<View style={[Estilo.container,Estilo.borda]}>




  <View style={Estilo.borda} >

    

    
    <Caixa  corfd={cor} cor='white' fs='32px'><Text onPress={onPress} >{texto}</Text></Caixa>
      
  </View>
 
      
     


    </View>

    </Fragment>
  )
};
