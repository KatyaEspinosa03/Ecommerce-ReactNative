import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Details = ({product}) => {
  return (
    <>
    <Header title={product}/>
    <Text> Details </Text>
    </>
  )
}

export default Details

const styles = StyleSheet.create({})