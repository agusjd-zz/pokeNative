import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getPokemonDetailsApi } from '../Api/Pokemon'
import Header from '../Components/Pokemon/Header'
import Type
 from '../Components/Pokemon/Type'
export default function Pokemon(props) {
    const {navigation,route:{params},} = props

    const [pokemon,setPokemon] = useState(null)

    useEffect(()=>{
        (async()=>{
            try {
                const response = await getPokemonDetailsApi(params.id)
                
                setPokemon(response)
                
            } catch (error) {
                navigation.goBack();
            }
        })()
    },[params])

    if(!pokemon) return null;

    return (
        <View>
            
            <ScrollView>
                <Header name={pokemon.name} 
                order={pokemon.order}
                 img={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name} />

            <Type types={pokemon.types} />
            </ScrollView>
            
        </View>
    )
}
