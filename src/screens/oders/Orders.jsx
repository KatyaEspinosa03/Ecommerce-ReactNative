import { View, Text, FlatList, Image } from 'react-native'
import React, {useEffect} from 'react'
import styles from './Orders.style'
import { useGetOrdersQuery } from '../../services/shopAPI'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../../db'
import { setUser } from '../../features/auth/authSlice'
import { stopLocationUpdatesAsync } from 'expo-location'

const Orders = () => {

  const {data, isLoading} = useGetOrdersQuery()
  const orders = data ? Object.values(data) : [];
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  console.log("estas son las ordenes", data)

  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession();
        if(session.rows.length){
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log(error.mesage)
      }
    })()
  },[])

  const userOrders = orders.filter((order) => order.user === user);
 
  return (
    <View style={styles.container}>

    {!isLoading && userOrders.length > 0 ? (
       <FlatList 
       data={userOrders}
       renderItem={({item}) => (
        <View> 
          {item.cartItems.map((cartItem) => (
            <View 
            key={cartItem.id}
            style={styles.list}>
              <View style={styles.titleContainer}>
              <Image
               style={styles.image}
               source={{
                uri: cartItem.images[0]
              }} />
              <Text style={styles.title}> {cartItem.title}, {cartItem.category}</Text>
              </View>
             
              <Text style={styles.quantity}> Cantidad: {cartItem.quantity}</Text>
            </View>
          ))}
        </View>
       
       )}
     keyExtractor={(item) => item.id}
     />
    ) : (
      <Text> no orders found </Text>
    )}

      
    </View>
  )
}

export default Orders