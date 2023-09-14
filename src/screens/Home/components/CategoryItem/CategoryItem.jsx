import { Pressable, Text, useWindowDimensions } from 'react-native'

import {Card} from '../../../../components'
import React, { useEffect } from 'react'
import styles from './CategoryItem.style'


const CategoryItem = ( {category, navigation} ) => {

  const {height, width} = useWindowDimensions()

  useEffect(() => {
    console.log(height,width)
  },[])

  return (
   <Pressable onPress={() => navigation.navigate('Products', { category })}>
    <Card style={styles.cardContainer}>
      
        <Text style={styles.text}> {category} </Text>
    </Card>
    </Pressable>
  )
}

export default CategoryItem

