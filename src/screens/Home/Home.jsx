
import React from 'react'
import { CategoryItem } from './components'
import {Header} from '../../components'
import { View, FlatList } from 'react-native'
import styles from './Home.styles'
import { useGetCategoriesQuery } from '../../services/shopAPI'

const Home = ({navigation}) => {

  const { data, isLoading } = useGetCategoriesQuery()
  return (

  <View style={styles.container}>
      {/* <Header title={"Home"}/> */}
      {!isLoading && (
            <FlatList 
            data={data}
            keyExtractor={category => category.title}
            renderItem={({item}) => <CategoryItem category={item.title} navigation={navigation}
            />}
            />
      )}

  </View>

  )
}

export default Home
