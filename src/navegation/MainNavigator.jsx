import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../features/auth/authSlice'
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
    
  return user? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator