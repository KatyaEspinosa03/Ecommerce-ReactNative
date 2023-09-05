import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import dataCategories from '../data/dataCategories'

const Categories = () => {
  return (
    <View style={styles.container}>
   <FlatList 
   data={dataCategories}
   keyExtractor={category => category}
   renderItem={({item}) => (
   <View style={{backgroundColor:"red"}}> 
    <Text> {item} </Text>
   </View>)}
   />

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})