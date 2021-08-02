import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, Header } from 'react-native';
import globalStyles from '../globals/GlobalStyles';
// import Header from '../components/layouts/Header';
function Home({ navigation }) {
    return (
            <View style={globalStyles.container}>

                <Text style={{paddingTop: 200}}>This is home</Text>
            </View>
    )
}

const styles = StyleSheet.create({

});

export default Home
