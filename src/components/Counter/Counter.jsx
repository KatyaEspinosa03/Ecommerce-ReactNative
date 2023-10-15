import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/counter/counterSlice'
import styles from './Counter.styles'

const Counter = ({product}) => {

  // atraves de counter tengo acceso al estado y al valor que se definió en counterSlice
  const counter = useSelector(state => state.counter[product.id] || 1)
  const dispatch = useDispatch()

  return (
    <View>

      <View style={styles.counterContainer}>

        <Pressable style={styles.counterButtons}
        onPress={() => dispatch(decrement(product.id))}>
          <Text style={styles.signs}>-</Text>
        </Pressable>
        
        <Text style={styles.signs}>{counter}</Text>

        <Pressable style={styles.counterButtons}
        onPress={() => dispatch(increment(product.id))}>
          <Text style={styles.signs}>+</Text>
        </Pressable>

      </View>
    </View>
  )
}
export default Counter

