import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

function Main(props) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {props.children}
            </View>
            <View style={styles.footer}>
                <View style={styles.bottomNav}>
                    <Feather name="chevrons-left" size={24} color="black" />
                </View>
                <View style={styles.bottomNav}>
                    <Feather name="home" size={24} color="black" />
                </View>
                <View style={styles.bottomNav}>
                    <Feather name="info" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    body: {flex: 5, backgroundColor: '#fff'},
    footer: {
        flex: 1/2,
        flexDirection: 'row',
        backgroundColor: '#d3eac3',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomNav:{
        flex: 2,
        alignItems: 'center',
        
    }
});
export default Main
