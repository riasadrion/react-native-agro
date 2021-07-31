import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
function Login({ navigation }) {
    return (
        <div>
            <View style={styles.container}>
                <View style={styles.logoBg}>
                <Image style={{width: 110, height: 73}} source={require('../assets/images/logo.png')} />
                </View>
                <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate('Home', { name: 'Home' })
                    }
                />
            </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoBg: {
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 40,
        paddingRight: 21,
        paddingLeft: 31,
        borderRadius: '50%'
      }
});

export default Login
