import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.styles.js'
import dataCart from '../../data/dataCart.js'
import CartItem from './components/cartItem/CartItem'

const Cart = () => {

  const renderItem = () => (
    <CartItem />
  )
  return (
    <View style={styles.container}>
      
      <View>
      <FlatList 
      data={dataCart}
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