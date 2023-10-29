import { Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './details.style'
import { Counter, AddToCart, CustomModal } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../constants/colors'
import { fetchSession } from '../../db/index.js'
import { setUser } from '../../features/auth/authSlice.js'
import { usePostWishlistMutation } from '../../services/shopAPI.js'



const Details = ({ route }) => {

  const {product} = route.params 
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.counter[product.id])
  const [triggerPost, result] = usePostWishlistMutation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

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

  const handleAddToCart = () => {
    // utilizo quantity proveniente del counter para tomar en cuenta la cantidad que el 
    // usuario selecciona y si no seleccinó ninguna, se pone 1 por default 
    dispatch(addToCart({...product, quantity: quantity || 1}));
    setIsModalVisible(true)
    setModalMessage(`${product.title} fue agregado al carrito`)
    console.log(quantity)
    console.log(product)
  };

  const handleAddToWishlist = () => {
    setIsModalVisible(true)
    setModalMessage(`${product.title} fue agregado a tu wishlist, recarga la app`)
    triggerPost({...product, user: user})
    console.log("agregado a wishlist:", product.title)
    
  }
  return (
    <View style={styles.container}>

    <View style={styles.productContainer}>
      <Image style={styles.image}
      source={{ uri: product.images[0]}} />

              <Pressable
              onPress={handleAddToWishlist}>
            <Feather name="heart" size={24} color= {colors.secondary} />
        </Pressable>
    <ScrollView style={styles.scrollViewStyle}>
      <Text  style={styles.textProduct}> {product.title} </Text>
      <Text  style={styles.price}> {`$ ${product.price}`} </Text>
      <Text style={styles.textDescription}> {product.description} </Text>
      </ScrollView>
        <View style={styles.counter}>
        <Counter product={product}/>
        <AddToCart onPress={handleAddToCart}/>
        </View>
      </View>
      <CustomModal 
      visible={isModalVisible}
      message={modalMessage}
      onClose={() => setIsModalVisible(false)}/>
    </View>
  )
}

export default Details

