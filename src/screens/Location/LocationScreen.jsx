import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './Location.styles'
import { useEffect } from 'react'
import * as Location from 'expo-location'
import { MapPreview } from '../../components'

const LocationScreen = () => {
const [location, setLocation] = useState({latitude: '', longitude: ''})
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
           latitude: location?.coords.latitude,
           longitude: location.coords.longitude,
        })
    })()
}, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu ubicación</Text>

      {location ? ( 

      <View style={styles.withoutLocation}>
        <View>
        <Text style={styles.locationText}>
        Latitude: {location.latitude}
        </Text>
        <Text style={styles.locationText}>
         Longitude: {location.longitude}
        </Text>
        </View>

        <View style={styles.withoutLocation}> 
        <MapPreview location={location} />
        </View>


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