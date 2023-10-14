import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './AddToCart.styles'


const AddToCart = ({product, onPress}) => {



  return (
    <View>
        <Pressable 
        style={styles.container}
        onPress={onPress}
        >
        <Text style={styles.text}> Agregar </Text>
        </Pressable>

    </View>
  )
}

export default AddToCart