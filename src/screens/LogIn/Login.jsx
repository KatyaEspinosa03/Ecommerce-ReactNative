import { View, Text, TextInput, Pressable, Image } from 'react-native'
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
  // console.log(email,password)
  triggerLogin({
    email, 
    password}
  )
  // console.log(result)
  if(result.isSuccess){
    dispatch(setUser(result.data))
    insertSession({
      localId: result.data.localId,
      email: result.data.email,
      token: result.data.idToken,
    }).then(result => console.log(result)).catch(error => console.log(error.message))
  }
 }

  return (
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
        onChangeText={setPassword}/>
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
  )
}

export default Login