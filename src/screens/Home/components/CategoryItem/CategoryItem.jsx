import { Pressable, Text } from 'react-native'

import {Card} from '../../../../components'
import React from 'react'
import styles from './CategoryItem.style'


const CategoryItem = ( {category} ) => {
  return (
   <Pressable onPress={() => console.log(`Esta es la categoria ${category}`)}>
    <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
    </Card>
    </Pressable>
  )
}

export default CategoryItem

