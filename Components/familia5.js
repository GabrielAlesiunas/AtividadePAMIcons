import React from 'react';
import { Text, View } from 'react-native';
import {Fontisto} from '@expo/vector-icons'; 
import estilo from './estilo';

export default function familia5 () {
  return (
    <View style={estilo.container}>
      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Bell</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="bell" size={50} color="orange" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Download</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="download" size={50} color="orange" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Lightbulb</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="lightbulb" size={50} color="orange" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Ticket</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="ticket" size={50} color="orange" />
        </View>
      </View>

      <View style={estilo.familia_icones}>
        <Text style={estilo.familia_titulos}>Database</Text>
        <View style={estilo.lista_icones}>
        <Fontisto style={estilo.espaco_icones} name="database" size={50} color="orange" />
        </View>
      </View>
    </View>
  );
}