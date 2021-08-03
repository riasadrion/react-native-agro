import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import Main from '../components/layouts/Main';
function Home({ navigation }) {
    return (
        <Main>
            <View style={styles.options}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('SeedsInfo', { name: 'SeedsInfo' })
                } 
                style={styles.btn} >
                <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/images/store.png')} />
                <Text style={styles.btnText}>বীজের তথ্যাবলি</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home', { name: 'Home' })
                } 
                style={styles.btn} >
                <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/images/About.png')} />
                <Text style={styles.btnText}>আমাদের সম্পর্কে</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home', { name: 'Home' })
                } 
                style={styles.btn} >
                <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/images/FAQ.png')} />
                <Text style={styles.btnText}>সচরাচর জিজ্ঞাসা</Text>
            </TouchableOpacity>
            </View>
        </Main>
    )
}

const styles = StyleSheet.create({
    options: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        flexDirection:'row',
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efffe6',
        paddingHorizontal: 7,
        paddingVertical: 12,
        borderRadius: 7,
        elevation: 2,
        marginBottom: 15,
    },
    btnText: {
        fontWeight: 'bold',
        color: '#525252', 
        fontSize: 20
    },
});

export default Home
