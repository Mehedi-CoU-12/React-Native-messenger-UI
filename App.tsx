import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActiveStatus from './component/ActiveStatus'
import Conversation from './component/Conversation'
import Home from './component/Home'

const App = () => {
    return (
        <View>
            <ActiveStatus/>
            <Home/>
            <Conversation/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({})