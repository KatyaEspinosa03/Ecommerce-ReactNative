import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Orders.style'
import { useGetOrdersQuery } from '../../services/shopAPI'

const Orders = () => {

  const {data, isLoading} = useGetOrdersQuery()
  return (
    <View styles={styles.container}>
      {!isLoading && (
              <FlatList
              data={data}
              renderItem={({item}) => (
                  <Text> {item} </Text>
              )}
              keyExtractor={item => item}/>
      )}

      <Text>Orders</Text>
    </View>
  )
}

export default Orders