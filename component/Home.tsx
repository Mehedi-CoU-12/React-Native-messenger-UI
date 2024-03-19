import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={{color:'white', fontWeight:'bold'}}>Home</Text>
        </View>
        <View style={styles.box}>
            <Text style={{color:'white', fontWeight:'bold'}}>Channels</Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
    },
    box:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:22,
        width:100,
        backgroundColor:'gray',
        margin:4,
        borderRadius:10
    }
})