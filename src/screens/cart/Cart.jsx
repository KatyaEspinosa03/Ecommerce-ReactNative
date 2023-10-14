import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.styles.js'
import CartItem from './components/cartItem/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopAPI.js'
import { emptyCart } from '../../features/cart/cartSlice.js'

const Cart = () => {
  const total = useSelector(state => state.cart.total)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [triggerPost, result] = usePostOrderMutation()
  const dispatch = useDispatch()

  const renderItem = ({item}) => (
    <CartItem 
    item={item} />
  )

  const confirmCart = () => {
    triggerPost({total, cartItems, user: "loggedUser"})
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart())
  }
  return (
    <View style={styles.container}>
      
      <View>
      <FlatList 
      data={cartItems}
      keyExtractor={item => item.id}
      renderItem={renderItem}/>
      </View>

      <View style={styles.containerCart}>

      <View>
            <Text style={styles.textPrice}>
              {`Total: $${total}`}
            </Text>
          </View>

          <Pressable
        onPress={handleEmptyCart}>
          <Text style={{color: 'white'}}> VACIAR </Text>
        </Pressable>
        
        <Pressable
        onPress={confirmCart}>
          
          <Text style={styles.textConfirm}>
            Comprar
          </Text>



        </Pressable>
      </View>

    </View>
  )
}

export default Cart