import React from "react";
import { View, Text, Image } from "react-native"

import Jogos from '../../assets/smash.png'
import stylesConteudo from "./styles";

export default function Conteudo() {
    return(
        <View style={ stylesConteudo.containerContent }> 
            <Text style={ stylesConteudo.title }> Os principais jogos estão aqui </Text>
            <Image style={ stylesConteudo.contentImg } source= {Jogos} />
            <Text style={ stylesConteudo.text }> A familia Nintendo Switch é o lar de jogos exclusivos da séries como Super Smash Bros, The Legend of Zelda, Mario Kart e muitas outras </Text>
        </View>
    )
}