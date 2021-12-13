import React from 'react'
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback} from 'react-native'

export default function PokemonCard(props) {
    const { pokemon} = props;

    const goToPokemon = ()=>{
        console.log(`Vamos al pokemon: ${pokemon.name}`)
    }
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Text style={styles.order}>#{`${pokemon.order}`.padStart(3,0)}  </Text>
                        <Text style={styles.name}>{pokemon.name} </Text>
                        <Image source={{uri:pokemon.img}} style={styles.img}  />
                    </View>
                    
                </View>
                
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    card:{
        flex:1,
        height: 130
    },
    spacing:{
        flex:1,
        padding:5
    },
    bgStyles:{
        backgroundColor:"grey",
    },
    name:{
        color:"white",
        fontWeight:"bold",
        fontSize:15,
        paddingTop:10,
    },
    order:{
        position:"absolute",
        right: 10,
        top:10,
        color: "white",
        fontSize:11

        
    },
    img:{
        position: "absolute",
        bottom: 2,
        right:2,
        width: 90,
        height: 90
    },
  
})
