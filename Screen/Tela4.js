import React, { Fragment } from 'react';
import {Text} from 'react-native'
import TituloView from '../components/TituloView';
import Computador from '../components/Computador';
import Button from '../components/Button';

export default () => {
 
  ////props.navigation.navigate('Tela1'); 

  return (
    <Fragment>

      <TituloView corFundo="#010D26" corTexto="#05F2F2" position="flex-start">
          General status


      </TituloView>  
     
<Computador/>
      
    </Fragment>
  );
};
