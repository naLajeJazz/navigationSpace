import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import Estilo from '../FolhaEstilo/FolhaEstilo'

export default (props) =>{



return(
<TouchableOpacity>

<View style={Estilo.caixa2}>{props.children}</View>

</TouchableOpacity>
  )
}