import { Image, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'

const ActiveStatus = () => {

    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    return (
        <View >
            <ScrollView horizontal={true} >
                <View style={styles.container} >
                    <View style={[styles.user,styles.user1]}>
                        <Text>Mehedi</Text>
                    </View>
                    <View style={[styles.user,styles.user2]}>
                        <Text style={{color:'black'}}>Hasan</Text>
                    </View>
                    <View style={[styles.user,styles.user3]}>
                        <Text>Yasin</Text>
                    </View>
                    <View style={[styles.user,styles.user4]}>
                        <Text>Imran</Text>
                    </View>
                    <View style={[styles.user,styles.user5]}>
                        <Text>Shakil</Text>
                    </View>
                    <View style={[styles.user,styles.user6]}>
                        <Text style={{color:'black'}} >Ryhan</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ActiveStatus

const styles = StyleSheet.create({
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 8,
        marginTop:8,
        marginBottom:4
    },
    user: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 8
    },
    user1:{
        backgroundColor:'red',
    },
    user2:{
        backgroundColor:'yellow',
        color:'red'
    },
    user3:{
        backgroundColor:'gray'
    },
    user4:{
        backgroundColor:'blue'
    },
    user5:{
        backgroundColor:'green'
    },
    user6:{
        backgroundColor:'pink'
    }
})