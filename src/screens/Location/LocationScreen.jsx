import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './Location.styles'
import { useEffect } from 'react'
import * as Location from 'expo-location'
import { MapPreview } from '../../components'

const LocationScreen = () => {
const [location, setLocation] = useState({latitue: '', longitude: ''})
const [error, setError] = useState('')

useEffect(() => {
    (async () => {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            setError('Permission to access location was denied')
            return
        }
        console.log(status)
        let location = await Location.getCurrentPositionAsync({})
        setLocation({
           latitue: location?.coords.latitude,
           longitude: location.coords.longitude,
        })
    })()
}, [])
  return (
    <View style={styles.container}>
      <Text>My address</Text>

      {location ? ( 
      <View style={styles.withoutLocation}>
        <Text>
            Lat: {location.latitue}, Longitude: {location.longitude}
        </Text>
        {/* <MapPreview location={location} /> */}
    </View>
    ): ( 
    <View style={styles.withoutLocation}>
        <Text>
            {error}
        </Text>
    </View>)}
    </View>
  )
}

export default LocationScreen