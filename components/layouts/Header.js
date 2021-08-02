import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { globalStyles } from '../../globals/GlobalStyles';

function Header() {
    return (
            <View style={styles.header}>
                <View>
                    <Text style={{paddingTop: 30}}>this is header</Text>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
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
export default Header
