import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ( {title} ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 80,
        width: "200%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
    }
})