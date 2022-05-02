import React, {Fragment}from 'react'
import TituloView from '../components/TituloView'
import Tabuleiro from '../components/Tabuleiro'
import Estilo from '../FolhaEstilo/FolhaEstilo'
import Button from '../components/Button'
import { View } from 'react-native-web'

export default () => {

  return (

<Fragment>
<View style={[Estilo.container3,Estilo.borda]}>


    <Tabuleiro/>
</View>
</Fragment> 

  )
}