import React from 'react';
import{View,Text,StyleSheet}from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './routes/tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default props=>{



return(

<View style={Estilo.container}>

<NavigationContainer>

   <Tabs/>

</NavigationContainer>


</View>
)
}

const Estilo=StyleSheet.create({
container:{
  flexGrow:1
}


})