import {  Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { useGetWishListQuery} from '../../../../services/shopAPI'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../../../../db'
import { setUser } from '../../../../features/auth/authSlice'
import styles from './WishlistItem.styles'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../../../constants/colors'
import { useRemoveFromWishlistMutation } from '../../../../services/shopAPI'


const WishlistItem = ({navigation}) => {

    const {data, isLoading} = useGetWishListQuery()
    const wishlistItems = data ? Object.keys(data).map(key => data[key]) : [];
    const {user} = useSelector(state => state.auth)
    const [triggerDelete, result ] = useRemoveFromWishlistMutation()
    const dispatch = useDispatch()

    // console.log("esta es la lista de wishlist", data)

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

    const userWishlist = wishlistItems.filter((item) => item.user === user)


    // const handleRemoveFromWishList = (itemKey) => {

    //   triggerDelete({key: itemKey})
    //   .then((result) => {
    //     if (result.error) {
    //       console.log("error deleting item", result.error)
    //     }else {
    //       console.log('item deleted from the wishlist', itemKey);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('error;', error);
    //   })

    // }


  return (
    <View style={styles.container}>
      {!isLoading && userWishlist.length > 0 ? (
        <FlatList
        data={userWishlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <View
            key={item.id}
            style={styles.imageContainer}>
              
              {/* <Pressable style={styles.minusButton}
              onPress={() => {
                console.log('item id', item.key)
              handleRemoveFromWishList(item.key)}}>
            <Feather name="minus-circle" size={26} color= {colors.secondary} />
        </Pressable> */}
        <TouchableOpacity
        onPress={() => navigation.navigate('Details', { product: item })}>
        <Image
                style={styles.image}
                source={{
                  uri: item.images[0]
                }} />
        </TouchableOpacity>
            </View>
        )}/>
      ): (
        <Text style={styles.emptyWishlist}> No has agregado productos a tu lista de deseos.</Text>
      )}
    </View>
  )
}

export default WishlistItem

