import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './details.style'
import { Counter, AddToCart } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { stopLocationUpdatesAsync } from 'expo-location'


const Details = ({ route }) => {

  const {product} = route.params 
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.counter[product.id])

  const handleAddToCart = () => {
    // utilizo quantity proveniente del counter para tomar en cuenta la cantidad que el 
    // usuario selecciona y si no seleccinó ninguna, se pone 1 por default 
    dispatch(addToCart({...product, quantity: quantity || 1}));
    console.log(quantity)
    console.log(product)
  };
  return (
    <View style={styles.container}>

    <View style={styles.productContainer}>
      <Image style={styles.image}
      source={{ uri: product.images[0]}} />
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
    </View>
  )
}

export default Details

