import React from 'react'
import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native'

//import  Constants  from 'expo'
import Constants from 'expo-constants'

const ImageIcon = ({ imagePath }) =>
  imagePath ? (
    <Image style={styles.image} source={imagePath} />
  ) : (
    <Image
      style={styles.image}
      source={require('../assets/placeholder.png')}
    />
  )
// styles
var styles = StyleSheet.create({
  image: {
    height: 70,
    borderRadius: 35,
    width: 70,
  },
})

export default ImageIcon
