import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

const CategoriesList = ({category}) => {
  return (
    <>
      <Header title={category}/>
  <View>
    <Text style={styles.container}> Categories List </Text>
  </View>
    </>

  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
    }
})