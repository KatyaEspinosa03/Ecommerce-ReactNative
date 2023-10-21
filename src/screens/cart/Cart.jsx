import { View, Text, FlatList, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import styles from './Cart.styles.js'
import CartItem from './components/cartItem/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopAPI.js'
import { emptyCart } from '../../features/cart/cartSlice.js'
import { useState } from 'react'
import { fetchSession } from '../../db/index.js'
import { setUser } from '../../features/auth/authSlice.js'

const Cart = () => {
  const total = useSelector(state => state.cart.total)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const {user} = useSelector(state => state.auth)
  const [triggerPost, result] = usePostOrderMutation()
  const dispatch = useDispatch()
  const [isPressed, setIsPressed] = useState(false)

  //Use effect para obtener el usuario que realiza la orden

  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession();
        if(session.rows.length){
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log(error.mesage)
      }
    })()
  },[])

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const renderItem = ({item}) => (
    <CartItem 
    item={item} />
  )

  const confirmCart = () => {
    triggerPost({total, cartItems, user: user})
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
          <Pressable
        onPress={handleEmptyCart}
        onPressOut={handlePressOut}
        style={({ pressed }) => [{
          opacity: pressed || isPressed ? 0.5 : 1,
        }]}>
          <Text  style={styles.textConfirm}> Vaciar </Text>
        </Pressable>
        
        <Pressable
        onPress={confirmCart}
        onPressOut={handlePressOut}
        style={({ pressed }) => [{
          opacity: pressed || isPressed ? 0.5 : 1,
        }]}>
          <Text style={styles.textConfirm}>
            Comprar
          </Text>
        </Pressable>

        <View>
            <Text style={styles.textPrice}>
              {`Total: $${total}`}
            </Text>
        </View>

      </View>

    </View>
  )
}

export default Cart