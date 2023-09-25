import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.styles.js'
import dataCart from '../../data/dataCart.js'
import CartItem from './components/cartItem/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)


  const renderItem = ({item}) => (
    <CartItem 
    product={item} />
  )
  return (
    <View style={styles.container}>
      
      <View>
      <FlatList 
      data={cartItems}
      keyExtractor={item => item.id}
      renderItem={renderItem}/>
      </View>

      <View>
        <Pressable>
          <Text>
            Confirm
          </Text>

          <View>
            <Text>
              {`Total $100`}
            </Text>
          </View>

        </Pressable>
      </View>
    </View>
  )
}

export default Cart