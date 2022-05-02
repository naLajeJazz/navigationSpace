import React, {Fragment}from 'react'
import Computador from '../components/Computador'
import Cpu from '../components/Cpu/components/Cpu'
import Estilo from '../FolhaEstilo/FolhaEstilo'
import { View } from 'react-native-web'

export default () => {

  return (

<Fragment>
<View style={[Estilo.container3,Estilo.borda]}>

<Cpu/>

</View>
</Fragment> 

  )
}