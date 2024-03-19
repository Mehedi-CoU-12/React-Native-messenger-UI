import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Conversation = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
                <View style={styles.user}>

                    <View style={styles.userImage} >
                        <View style={styles.userText}>
                            <Text>MH</Text>
                        </View>
                    </View>

                    <View style={styles.userMsg}>
                        <Text>Mehedi</Text>
                        <Text style={styles.msg}>Hello</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Conversation

const styles = StyleSheet.create({
    container: {
        padding: 14
    },
    user: {
        flexDirection: 'row',
    },
    userImage: {
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 30,
        margin: 8
    },
    userText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userMsg: {
        marginTop: 18,
        marginLeft: 8
    },
    msg: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})