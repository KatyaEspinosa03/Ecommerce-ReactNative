import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import styles from './Products.styles'
import {Header, SearchInput, Card} from '../../components'



const Products = ({ navigation, route }) => {

   const [arrProducts, setArrProducts] = useState([])
   const [keyword, setKeyword] = useState('')
   const { category } = route.params

   useEffect(() => {

    navigation.setOptions({title: category})

    if(category){
        const products = allProducts.filter(
            product => product.category === category)

        const productsFiltered = products.filter(
            product => product.title.includes(keyword)
            )
        setArrProducts(productsFiltered)
    }else{
        const productsFiltered = allProducts.filter(
            product => product.title.includes(keyword)
            )
        setArrProducts(productsFiltered)
    }
   },[category, keyword]);

  return (
    <View style={styles.container}> 
      {/* <Header title={category} /> */}
      <SearchInput onSearch={setKeyword}/>
      <View style={styles.listContainer}>
        <FlatList 
        data={arrProducts}
        renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
          <Card style={styles.cardContainer}> 
            <Text style={styles.text}> {item.title} </Text>
          </Card>

        </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        />
        
      </View>
    </View>
  )
}

export default Products