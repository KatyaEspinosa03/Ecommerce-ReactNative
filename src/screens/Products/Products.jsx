import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import styles from './Products.styles'
import {Header, SearchInput} from '../../components'



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
        numColumns={2}
        columnWrapperStyle={styles.wrapperStyle}
        renderItem={({item}) => (
        <TouchableOpacity 
        style={styles.productContainer}
        onPress={() => navigation.navigate('Details', { product: item })}
        >
          <Image 
          style={styles.image}
          source={{
            uri: item.images[0]
          }}
          />
          <Text style={styles.text}> {item.title} </Text>
          <Text style={styles.price}> ${item.price} </Text>

        </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        />
        
      </View>
    </View>
  )
}

export default Products