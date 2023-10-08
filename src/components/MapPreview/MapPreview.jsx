import { View, Text, Image} from 'react-native'
import React from 'react'
import styles from './MapPreview.styles'
import { googleApi } from '../../firebase'

const MapPreview = ({location}) => {
  console.log(location)
    const mapPreviewURL = 
    `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${googleApi.mapStatic}`
  return (
    <View style={styles.mapPreview}>
        <Image
        style={styles.mapImage}
        source={{uri: mapPreviewURL}}/>
    </View>
  )
}

export default MapPreview