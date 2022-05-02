import React from 'react';
import Tela1 from '../Screen/Tela1';
import Tela2 from '../Screen/Tela2';
import Tela3 from '../Screen/Tela3';
import Tela4 from '../Screen/Tela4';
import { MaterialCommunityIcons, Entypo,FontAwesome5 } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default (                                                                                                                                                                                                                                                                                                              )=>{

const Tabs=createBottomTabNavigator();

return(

<Tabs.Navigator 
        initialRouteName='Tela2'
            screenOptions={{
            headerShown:false,
            tabBarStyle: { backgroundColor: '#010D26' },
            
            }}
        tabBarOptions={{activeTintColor:'#05F2F2',inactiveTintColor:'#397373',
       
        
        labelStyle:{
         
        fontSize:20 
                    },
                    
                    showLabel:false 
                    }}                                                                                                                                                              
                     >

  <Tabs.Screen 
        name= "Tela1" 
        component={Tela1}           
        options={{tabBarLabel:'home',
        tabBarIcon: ({color,size})=>( <FontAwesome5 name="sitemap" size={size} color={color} /> )
                  }} />
  <Tabs.Screen 
        name='Tela2' 
        component={Tela2} 
        options={{tabBarLabel:'sobre',
        tabBarIcon: ({color,size})=>( <MaterialCommunityIcons name="navigation" size={size} color={color}/> )
                  }} />
  <Tabs.Screen 
        name='Tela3' 
        component={Tela3}
        options={{tabBarLabel:'contato',
        tabBarIcon:({color,size})=>( <Entypo name="classic-computer" size={size} color={color} /> )
                  }} />
  <Tabs.Screen 
        name='Tela4' 
        component={Tela4}
        options={{tabBarLabel:'contato',
        tabBarIcon:({color,size})=>( <Entypo name="classic-computer" size={size} color={color} /> )
                  }} />
        
   </Tabs.Navigator>

)
}