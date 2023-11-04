import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView, Platform  } from 'react-native'
import React from 'react'
import styles from './Login.styles'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [triggerLogin, result] = useLoginMutation()
 const dispatch = useDispatch()

 const onSubmit = () => {
  triggerLogin({
    email, 
    password
  }).unwrap().then(result => {
    dispatch(setUser(result))
    insertSession({
      localId: result.localId,
      email: result.email,
      token: result.idToken,
    })
    .then(result => console.log(result))
    .catch(error => console.log(error.message))
  })
 }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={{ flex: 1 }}>
    <View style={styles.container}>
     <View style={styles.loginContainer}> 

     <Image source={logo}
     style={styles.image}/>

        <Text style={styles.text}>
            Ingresa a tu cuenta
        </Text>
        <TextInput style={styles.inputEmail}
        placeholder="ingresa tu correo electrónico"
        value={email}
        onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail}
        placeholder="ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry/>
        <Pressable style={styles.loginButton}
        onPress={onSubmit}>
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
    </KeyboardAvoidingView>
  )
}

export default Login