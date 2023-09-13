import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import styles from './details.style'

const Details = ({product}) => {
  return (
    <View style={styles.container}>
    <Header title={'Detalle'}/>
    <Image style={styles.image}
    source={{ uri: product.images[0]}} />
    <Text  styles={styles.title}> {product.title} </Text>
    <Text> {product.description} </Text>
    <Text  styles={styles.price}> {`$ ${product.price}`} </Text>

    </View>
  )
}

export default Details

