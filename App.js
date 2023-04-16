import { StyleSheet, Text, View } from 'react-native';

import Topo from './components/Topo/index'
import Conteudo from './components/Conteudo/index'

export default function App() {
  return (
    <View style={stylesGlobal.containerGlobal}>
        <Topo />
        <Conteudo />
    </View>
  );
}

const stylesGlobal = StyleSheet.create({
  containerGlobal: {
      width:'100%',
      height:'100%',  
      justifyContent:'center',
      alignItems:'center',

  }
})