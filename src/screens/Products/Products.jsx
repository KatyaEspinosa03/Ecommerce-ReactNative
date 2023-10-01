import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import styles from './Products.styles'
import {Header, SearchInput} from '../../components'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopAPI'




const Products = ({ navigation, route }) => {
  
  

  const category = useSelector(state => state.shop.categorySelected)
   const [keyword, setKeyword] = useState('')
   const { data, isLoading } = useGetProductsByCategoryQuery(category)
   console.log(data)

  //  useEffect(() => {

  //   let productsFiltered;
  //   if(data){
  //       productsFiltered = data.filter(
  //           product => product.title.includes(keyword)
  //           )
  //   }
  //  },[keyword]);
   
  //  console.log(keyword)
  return (
    <View style={styles.container}> 
      {/* <Header title={category} /> */}
      {/* <SearchInput onSearch={setKeyword}/> */}
      <View style={styles.listContainer}>
        {!isLoading && (
              <FlatList 
              data={Object.values(data)}
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
        )}
    
        
      </View>
    </View>
  )
}

export default Products