import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../Components/Auth/LoginForm'
import UserData
 from '../Components/Auth/UserData'
export default function AccountScreen() {
    const auth = null
    return (
        <View>
            {auth ? <UserData/> : <LoginForm/>}
          
        </View>
    )
}
