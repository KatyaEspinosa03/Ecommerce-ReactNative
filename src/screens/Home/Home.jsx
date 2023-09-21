
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import {Header} from '../../components'
import { View, FlatList } from 'react-native'
import styles from './Home.styles'
import Counter from '../../components/Counter'

const Home = ({navigation}) => {
  return (

  <View style={styles.container}>
    <Counter />
      {/* <Header title={"Home"}/> */}
    <FlatList 
    data={dataCategories}
    keyExtractor={category => category}
    renderItem={({item}) => <CategoryItem category={item} navigation={navigation}
    />}
    />
  </View>

  )
}

export default Home
