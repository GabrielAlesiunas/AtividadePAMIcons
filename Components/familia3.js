import React from 'react';
import { Text, View } from 'react-native';
import {EvilIcons} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia3 () {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Archive</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="archive" size={50} color="purple" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Cart</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="cart" size={50} color="purple" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Credit-card</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="credit-card" size={50} color="purple" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Pointer</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="pointer" size={50} color="purple" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Trash</Text>
        <View style={estilo.lista_icones}>
        <EvilIcons style={estilo.espaco_icones} name="trash" size={50} color="purple" />
        </View>
      </View>
    </View>

    
  );
}