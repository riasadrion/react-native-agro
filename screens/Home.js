import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

function Home({ navigation }) {
    return (
            <View style={styles.container}>
                <Text>This is Home</Text>
                <Button
                    title="Go to login"
                    onPress={() =>
                        navigation.navigate('Login', { name: 'Login'})
                    }
                />
            </View>
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
        borderRadius: 100
      }
});

export default Home
