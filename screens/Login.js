import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, Label, Pressable } from 'react-native';
function Login({ navigation }) {
    return (
            <View style={styles.container}>
                <View style={styles.logoBg}>
                    <Image style={{width: 110, height: 73}} source={require('../assets/images/logo.png')} />
                </View>
                <View>
                    <Text style={styles.companyName}>A R MALIK SEEDS PVT. LTD.</Text>
                </View>
                <View style={styles.formLogin}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>নাম</Text>
                        <TextInput
                            placeholder={'আপনার নাম'}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>মোবাইল নম্বর</Text>
                        <TextInput
                            placeholder={'017-XXXXXXXX'}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{alignItems: 'center', marginVertical: 10}}>
                        <Pressable style={styles.btnLogin} >
                            <Text style={styles.btnText}>প্রবেশ করুন</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      logoBg: {
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 40,
        paddingRight: 21,
        paddingLeft: 31,
        borderRadius: 100
      },
      companyName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 35,
        color: '#525252'
      },
      formLogin:{
          backgroundColor: '#d3eac3',
          paddingHorizontal: 40,
          paddingTop: 40,
          paddingBottom: 30,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          elevation: 2
      },
      inputGroup:{
          marginBottom: 12
      },
      textInput: {
          backgroundColor: '#fff',
          height: 50,
          width: 310,
          borderRadius: 7,
          paddingHorizontal: 14,
          fontSize: 20
      },
      label: {
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 5,
          color: '#525252'
      },
      btnLogin: {
          width: 170,
          alignItems: 'center',
          backgroundColor: '#5fb748',
          paddingHorizontal: 7,
          paddingVertical: 12,
          borderRadius: 30,
          elevation: 5
      },
      btnText: {
          fontWeight: 'bold',
          color: '#fff', 
          fontSize: 20
      }
});

export default Login
