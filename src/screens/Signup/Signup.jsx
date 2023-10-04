import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './Signup.styles'
import logo from '../../assets/images/logo.png'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [triggerSignup, result ] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log(email, password, confirmPassword)
    triggerSignup({
      email, 
      password,
    })
    console.log(result)
    if(result.isSuccess) {
      dispatch(setUser(result))
    }
  }
  return (
    <View style={styles.container}>
     <View style={styles.signupContainer}> 
     <Image source={logo}
     style={styles.image}/>
        <Text style={styles.text}>
            Crea tu cuenta para comenzar
        </Text>
        <TextInput style={styles.inputEmail}
        value={email}
        onChangeText={setEmail}
        placeholder="ingresa tu correo electrónico"/>
        <TextInput style={styles.inputEmail}
        value={password}
        onChangeText={setPassword}
        placeholder="ingresa tu contraseña"/>
        <TextInput style={styles.inputEmail}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="confirma tu contraseña"/>

        <Pressable style={styles.loginButton}
        onPress={onSubmit}>
            <Text style={styles.subtext}> Sign up </Text>
        </Pressable>
        <Text style={styles.text}> ¿Ya tienes una cuenta? </Text>
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