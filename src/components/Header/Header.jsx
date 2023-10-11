import { Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'
import Feather from '@expo/vector-icons/Feather';
import { useDispatch } from 'react-redux'


const Header = ( {title} ) => {

  const dispatch = useDispatch()

  const handleOnLogOut = () => {
    dispatch(clearUser())
    deleteSession()

  }
  return (

    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Feather 
      style={styles.logoutIcon}
      name="log-out" 
      size={24} 
      onPress={handleOnLogOut}/>
    </View>
  )
}

export default Header

