import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './Login.styles'

const Login = () => {
  return (
    <View style={styles.container}>
     <View style={styles.loginContainer}> 
        <Text>
            Login to start 
        </Text>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>
        <Pressable style={styles.loginButton}>
            <Text> Login </Text>
        </Pressable>
        <Text> you don't have an account? </Text>
        <Pressable style={styles.loginButton}>
            <Text> Sign up</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Login