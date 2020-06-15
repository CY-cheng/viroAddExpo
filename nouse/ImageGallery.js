import React from 'react'
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native'

//import Immutable from 'immutable'
import Gallery from 'react-native-image-gallery'

export default class ImageGallery extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 / 3 }}>
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={[
              { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
              { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
              { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
              { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
            ]}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ flex: 2 / 3 }}>
          <Text>123</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width
var THUMBNAILS_PER_ROW = 2
var THUMBNAIL_SPACING = 10
var THUMBNAIL_SIZE =
  (DEVICE_WIDTH - THUMBNAIL_SPACING * (THUMBNAILS_PER_ROW * 2 + 2)) /
  THUMBNAILS_PER_ROW

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    margin: THUMBNAIL_SPACING,
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
  },
  header: {
    padding: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
  },
  imagegrid: {
    flex: 1,
  },
  layout: {
    margin: THUMBNAIL_SPACING,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})

const list = [
  {
    description: 'Image 1',
    imageUrl: 'http://placehold.it/480x480&text=Image%201',
    width: 480,
    height: 480,
  },
  {
    description: 'Image 2',
    imageUrl: 'http://placehold.it/640x640&text=Image%202',
    width: 640,
    height: 640,
  },
  {
    description: 'Image 3',
    imageUrl: 'http://placehold.it/640x640&text=Image%203',
    width: 640,
    height: 640,
  },
]
