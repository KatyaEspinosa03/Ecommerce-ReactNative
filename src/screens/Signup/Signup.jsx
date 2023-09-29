import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './Signup.styles'

const Signup = () => {
  return (
    <View style={styles.container}>
     <View style={styles.loginContainer}> 
        <Text style={{color: 'white'}}>
            Sign up to start
        </Text>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>

        <Pressable style={styles.loginButton}>
            <Text> Sign up </Text>
        </Pressable>
        <Text style={{color: 'white'}}> Already have an account? </Text>
        <Pressable style={styles.loginButton}>
            <Text> Login</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Signup