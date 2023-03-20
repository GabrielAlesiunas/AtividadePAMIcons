import React from 'react';
import { Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia1 (props) {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Bug</Text>
        <View style={estilo.lista_icones}>
        <Entypo style={estilo.espaco_icones} name="bug" size={50} color="darkred" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Calculator</Text>
        <View style={estilo.lista_icones}>
        <Entypo style={estilo.espaco_icones} name="calculator" size={50} color="darkred" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Chat</Text>
        <View style={estilo.lista_icones}>
        <Entypo style={estilo.espaco_icones} name="chat" size={50} color="darkred" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Camera</Text>
        <View style={estilo.lista_icones}>
        <Entypo style={estilo.espaco_icones} name="camera" size={50} color="darkred" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Cloud</Text>
        <View style={estilo.lista_icones}>
        <Entypo style={estilo.espaco_icones} name="cloud" size={50} color="darkred" />
        </View>
      </View>
    </View>
  );
}