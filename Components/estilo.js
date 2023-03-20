import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 20,
  },

  familia_icones:{
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  lista_icones:{
    flexDirection: "row",
    alignItems: 'center'
  },
  familia_titulos:{
    fontSize:30,
    borderStyle:'solid',
    borderColor:'#222',
  },

  espaco_icones:{
    margin: 20,
    
  },
  
});

export default estilo;