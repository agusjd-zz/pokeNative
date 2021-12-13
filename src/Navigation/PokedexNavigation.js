import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import PokedexScreen from '../Screens/Pokedex'
import PokemonScreen from '../Screens/Pokemon'

const Stack = createStackNavigator()

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={PokedexScreen}/>
            <Stack.Screen name="Pokemon" component={PokemonScreen}/>
        </Stack.Navigator>
    )
}
