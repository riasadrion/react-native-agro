import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

function Home({ navigation }) {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Image style={styles.flag} source={require('../assets/images/user-demo-img.png')} />
                    </View>
                    <View>
                        <TextInput style={styles.textInput}/>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      header: {
          flexDirection: 'row',
          backgroundColor: '#d3eac3',
          height: '12%',
          width: '100%',
          paddingHorizontal: 30,
          paddingVertical: 30,
          alignItems: 'flex-start',
          justifyContent: 'center' 
      }
});

export default Home
