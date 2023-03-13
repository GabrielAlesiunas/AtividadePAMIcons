import React from 'react';
import { Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia2 (props) {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text>AntDesign</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones}name="question" size={50} color="black" />
       <AntDesign style={estilo.espaco_icones} name="setting" size={50} color="black" />
       <AntDesign style={estilo.espaco_icones} name="phone" size={50} color="black" />
       <AntDesign style={estilo.espaco_icones} name="windows" size={50} color="black" />
       <AntDesign style={estilo.espaco_icones} name="github" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}