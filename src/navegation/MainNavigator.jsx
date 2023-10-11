import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setCameraImage, setUser } from '../features/auth/authSlice'
import { useGetProfileImageQuery } from '../services/shopAPI'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const MainNavigator = () => {
   // const [user, setUser] = useState(null)

   const {user, localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {error, data, isLoading} = useGetProfileImageQuery(localId)

    useEffect(() => {
      console.log(data)
    if(data){
      dispatch(setCameraImage(data.image))
    }
    }, [data])

    useEffect(() => {
      ;(async () => {
        try {
          const session = await fetchSession();
          console.log("Esta es la sesion",session)

          if(session.rows.length){
            console.log(session.rows._array[0])
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
          console.log(error.mesage)
        }
      })()
    },[])
    
  return user? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator