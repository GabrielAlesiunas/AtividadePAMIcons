import React from 'react';
import { Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia4 () {
  return (
    <View style={estilo.familia_icones}>
        <Text>Feather</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="code" size={50} color="black" />
        <Feather  style={estilo.espaco_icones} name="coffee" size={50} color="black" />
        <Feather  style={estilo.espaco_icones} name="delete" size={50} color="black" />
        <Feather  style={estilo.espaco_icones} name="pause" size={50} color="black" />
        <Feather  style={estilo.espaco_icones} name="send" size={50} color="black" />
        </View>
    </View>
  );
}