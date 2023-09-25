import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './AddToCart.styles'
import { addToCart } from '../../features/cart/cartSlice'

const AddToCart = ({product}) => {

  const dispatch = useDispatch()


  // creo funcion para agregar el elemento al carrito 
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
  return (
    <View>
        <Pressable 
        style={styles.container}
        onPress={handleAddToCart}>
        <Text style={styles.text}> Agregar </Text>
        </Pressable>

    </View>
  )
}

export default AddToCart