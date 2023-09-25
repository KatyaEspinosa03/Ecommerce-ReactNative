import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../../../constants/colors'

const CartItem = ({product}) => {
  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.name}>{product.title}</Text>
    </View>
      
      <View>
        <View style={styles.details}>
            <Text style={styles.detailsText}>Cantidad: </Text>
            <Text style={styles.detailsText}>Precio: ${product.price}</Text>
        <Pressable >
            <Feather name="trash" size={24} color= {colors.primary} />
        </Pressable>
         </View>
      </View>
    </View>
  )
}

export default CartItem