import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './Signup.styles'
import logo from '../../assets/images/logo.png'

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.signupContainer}> 
     <Image source={logo}
     style={styles.image}/>
        <Text style={styles.text}>
            Sign up to start
        </Text>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>

        <Pressable style={styles.loginButton}>
            <Text style={styles.subtext}> Sign up </Text>
        </Pressable>
        <Text style={styles.text}> Already have an account? </Text>
        <Pressable style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.subtext}> Login</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Signup