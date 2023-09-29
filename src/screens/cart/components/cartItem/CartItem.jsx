import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../../../constants/colors'
import { useSelector } from 'react-redux'

const CartItem = ({item}) => {
  
  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.name}>{item.title}</Text>
    </View>
      
      <View>
        <View style={styles.details}>
            <Text style={styles.detailsText}> Cantidad: {item.quantity} </Text>
            <Text style={styles.detailsText}>Precio: ${item.price}</Text>
        <Pressable >
            <Feather name="trash" size={24} color= {colors.primary} />
        </Pressable>
         </View>
      </View>
    </View>
  )
}

export default CartItem