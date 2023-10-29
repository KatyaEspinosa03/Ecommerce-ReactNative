import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import styles from './CustomModal.styles'


const CustomModal = ({visible, message, onClose}) => {

  return (
    <Modal 
    visible={visible} animationType="slide" transparent>
        <View  style={styles.container}>
      <Text
      style={styles.message}>{message}</Text>
      <TouchableOpacity
      onPress={onClose}
      style={styles.close}>
        <Text 
        style={styles.closeText}> Cerrar </Text>
      </TouchableOpacity>

    </View>
    </Modal>

  )
}

export default CustomModal