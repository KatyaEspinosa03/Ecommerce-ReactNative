import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './Login.styles'
import logo from '../../assets/images/logo.png'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.loginContainer}> 

     <Image source={logo}
     style={styles.image}/>

        <Text style={styles.text}>
            Ingresa a tu cuenta
        </Text>
        <TextInput style={styles.inputEmail}
        placeholder="ingresa tu correo electrónico"/>
        <TextInput style={styles.inputEmail}
        placeholder="ingresa tu contraseña"/>
        <Pressable style={styles.loginButton}>
            <Text style={styles.subtext}> Login </Text>
        </Pressable>
        <Text style={styles.text}> ¿Todavía no tienes una cuenta?</Text>
        <Pressable style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Signup')
        }}>
            <Text style={styles.subtext}> Sign up</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Login