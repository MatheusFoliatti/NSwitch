import React from "react";
import { View, Text, Image } from "react-native"

import Nintendo from '../../assets/nintendo.png'
import stylesTopo from "./styles";

export default function Topo() {
    return(
        <View style={stylesTopo.containerTopo }> 
            <Image style={ stylesTopo.contentImg } source= { Nintendo } />
            <Text style={ stylesTopo.title }> Nintendo Switch </Text>
        </View>
    )
}