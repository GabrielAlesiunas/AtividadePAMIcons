import React from 'react';
import { Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia4 () {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Code</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="code" size={50} color="yellow" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Coffee</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="coffee" size={50} color="yellow" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Delete</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="delete" size={50} color="yellow" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Pause</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="pause" size={50} color="yellow" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Send</Text>
        <View style={estilo.lista_icones}>
        <Feather  style={estilo.espaco_icones} name="send" size={50} color="yellow" />
        </View>
      </View>
    </View>
  );
}