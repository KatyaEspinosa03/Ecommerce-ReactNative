import { Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './details.style'
import { Counter, AddToCart } from '../../components'


const Details = ({ route }) => {

  const {product} = route.params 
  return (
    <View style={styles.container}>

    {/* <Header title={product.title}/> */}
    <View style={styles.productContainer}>
      <Image style={styles.image}
      source={{ uri: product.images[0]}} />

      <Text  style={styles.textProduct}> {product.title} </Text>
      <Text  style={styles.price}> {`$ ${product.price}`} </Text>
      <Text style={styles.textDescription}> {product.description} </Text>
        <View style={styles.counter}>
        <Counter product={product}/>
        <AddToCart product={product}/>
        </View>
  
      </View>
    </View>
  )
}

export default Details

