import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
function Main(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {props.children}
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.bottomNav}  onPress={() => { navigation.goBack(); }}>
                    <Feather name="chevrons-left" size={24} color="white" />
                </Pressable>
                <Pressable style={styles.bottomNav} onPress={() =>
                    navigation.navigate('Home', { name: 'Home' })
                } >
                    <Feather name="home" size={24} color="white" />
                </Pressable>
                <Pressable style={styles.bottomNav}>
                    <Feather name="info" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    body: {flex: 5},
    footer: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#3a984e',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    bottomNav:{
        flex: 2,
        alignItems: 'center',
        
    }
});
export default Main
