import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './Location.styles'

const Location = () => {
const [location, setLocation] = useState({latitue: '', longitude: ''})
  return (
    <View>
      <Text>My address</Text>

      {location ? (): ()}

      <View>

      </View>
    </View>
  )
}

export default Location