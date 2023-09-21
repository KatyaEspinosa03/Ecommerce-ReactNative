import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './details.style'
import { useSelector } from 'react-redux'

const Details = ({ route }) => {
  const counter = useSelector(state => state.counter.value)
  const {product} = route.params 
  
  return (
    <View style={styles.container}>

    {/* <Header title={product.title}/> */}
    <Image style={styles.image}
    source={{ uri: product.images[0]}} />

    <Text  style={styles.textProduct}> {product.title} </Text>
    <Text  style={styles.price}> {`$ ${product.price}`} </Text>
    <Text style={styles.textDescription}> {product.description} </Text>
    <Text style={{fontSize: 50}}>{counter}</Text>

    </View>
  )
}

export default Details

