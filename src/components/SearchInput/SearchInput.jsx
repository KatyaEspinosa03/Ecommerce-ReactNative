import {Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.styles'
import { colors } from '../../constants/colors'
import { useEffect } from 'react'


const SearchInput = ({onSearch}) => {
    const [value, setValue] = useState("")

    useEffect(() => {
      onSearch(value)
    }, [value])

    const search = () => {
        onSearch(value)
    }

    const clearInput = () =>{
        setValue("");
        onSearch("")
    }
  return (
    <View style={styles.container}>
     <TextInput
     style={styles.input} 
     value={value}
     onChangeText={setValue}
     placeholder="Search Product"/>

     <Pressable onPress={search}>
        <AntDesign name='search1' size={25} color={colors.tertiary}/>
     </Pressable>

     <Pressable onPress={clearInput}>
        <AntDesign name='closecircleo' size={25} color={colors.tertiary} marginRight={5}/>
     </Pressable>
    </View>
  )
}

export default SearchInput
