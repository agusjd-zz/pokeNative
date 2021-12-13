import React from 'react'
import {Image} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import FavoriteNavigation from './FavoriteNavigation'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import AccountNavigation from './AccountNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Favorite" 
            component={FavoriteNavigation}
            options = {{
                tabBarIcon: ({color,size}) =>(
                    <Icon name = "heart" color = {color} size = {size}/>
                )
            }}
            />
                <Tab.Screen name="Pokedex" component={PokedexNavigation}
            options={{
                tabBarLabel: "",
                tabBarIcon:() => renderPokeball(),
            }} 
            />
            <Tab.Screen name="Account" component={AccountNavigation}
             options={
                {
                    tabBarLabel:"My Account",
                    tabBarIcon:(color,size)=>(
                        <Icon name="user" color={color} size = {size}/>
                    )
                }
            } />
        
        </Tab.Navigator>
    )
}


function renderPokeball(){
    return(
        <Image
            source = {require("../Assets/pokeball.png")}
            style ={{width:70,height:70, top:-15}}
        />
    )
}