import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Profile.syles'
import * as ImagePicker from 'expo-image-picker'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopAPI'

const Profile = () => {
   const image = useSelector(state => state.auth.imageCamera)
   const {localId} = useSelector(state => state.auth)
   const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()

    const verifyCameraPermission = async () => {
      const {granted} = await ImagePicker.requestCameraPermissionsAsync()
      if(!granted){
        return false
      }
      return true
    }
    const pickImage = async () => {
      const isCameraOk = await verifyCameraPermission()

      if(isCameraOk){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9,16],
          base64: true,
          quality: 0.4,
          })
          if(!result.canceled){
            console.log(result.assets)
            dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            // setImage(`data:image/jpeg;based64,${result.assets[0].base64}`)
          }
      }
    }
    const confirmImage = () => {
      triggerSaveProfileImage({image, localId})
      console.log(result)

    }

  return (
    <View style={styles.container}>
        {image ?
         (
         <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode='cover'
            />
            ) :(
            <Image
            source={logo}
            style={styles.image}
            resizeMode='cover'/>
        )}
      
      <Pressable
      style={styles.cameraButton}
      onPress={pickImage}>
        <Text> Tomar foto de perfil </Text>
      </Pressable>

      <Pressable
      style={styles.cameraButton}
      onPress={confirmImage}>
        <Text> Confirmar </Text>
      </Pressable>
    </View>
  )
}

export default Profile