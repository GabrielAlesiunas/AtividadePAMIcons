import React from 'react';
import { Text, View } from 'react-native';
import {Fontisto} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia5 () {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text>Fontisto</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="bell" size={50} color="black" />
        <Fontisto style={estilo.espaco_icones} name="download" size={50} color="black" />
        <Fontisto style={estilo.espaco_icones} name="lightbulb" size={50} color="black" />
        <Fontisto style={estilo.espaco_icones} name="ticket" size={50} color="black" />
        <Fontisto style={estilo.espaco_icones} name="database" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}