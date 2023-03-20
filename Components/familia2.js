import React from 'react';
import { Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia2 (props) {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Question</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones}name="question" size={50} color="green" />
        </View>
      </View>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Setting</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones} name="setting" size={50} color="green" />

        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Phone</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones} name="phone" size={50} color="green" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Windows</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones} name="windows" size={50} color="green" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Github</Text>
        <View style={estilo.lista_icones}>
       <AntDesign style={estilo.espaco_icones} name="github" size={50} color="green" />
        </View>
      </View>
    </View>
  );
}