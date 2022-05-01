import React, {Fragment}from 'react'
import TituloView from '../components/TituloView'
import Tabuleiro from '../components/Tabuleiro'
import Button from '../components/Button'

export default () => {

  return (

<Fragment>

    <TituloView corFundo='#010D26' corTexto="#397373">
     Computer
    </TituloView>

    <Tabuleiro/>

</Fragment> 

  )
}