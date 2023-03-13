import React from 'react';
import { Text, View } from 'react-native';
import {EvilIcons} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia3 () {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text>EvilIcons</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="archive" size={50} color="black" />
        <EvilIcons style={estilo.espaco_icones} name="cart" size={50} color="black" />
        <EvilIcons style={estilo.espaco_icones} name="credit-card" size={50} color="black" />
        <EvilIcons style={estilo.espaco_icones} name="pointer" size={50} color="black" />
        <EvilIcons style={estilo.espaco_icones} name="trash" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}