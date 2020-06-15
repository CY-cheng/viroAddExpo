import React from 'react'
import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
  FlatList,
  Linking,
} from 'react-native'

//import Constants from 'expo'
import Constants from 'expo-constants'
import { locationData } from '../data/index'

import ImageIcon from '../component/ImageIcon'
import {
  List,
  Searchbar,
  Headline,
  Divider,
} from 'react-native-paper'
//import Immutable from 'immutable'
import Gallery from 'react-native-image-gallery'
import { ScrollView } from 'react-native-gesture-handler'

import { customColor } from '../data/customColor'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '景點詳細',
    headerStyle: {
      backgroundColor: customColor.header.backgroundColor,
    },
    headerTintColor: customColor.header.headerTintColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  })

  constructor(props) {
    super(props)

    this.state = {
      markers: [],
    }
  }

  render() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')

    const markerData = locationData.find(item => item.id === +itemId)

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 / 3 }}>
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={markerData.gallery}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ flex: 2 / 3 }}>
          <ScrollView>
            <View
              style={{ marginHorizontal: 10, marginVertical: 10 }}
            >
              <Headline style={{ color: customColor.text.headline }}>
                {markerData.title}
              </Headline>
              <Divider />
              <List.Item
                title=""
                description={markerData.desc}
                left={props => (
                  <List.Icon
                    {...props}
                    color={customColor.text.icon}
                    icon="info-outline"
                  />
                )}
                descriptionStyle={{ color: customColor.text.desc }}
              />
              <Divider />
              <List.Item
                title=""
                description={markerData.contact}
                left={props => (
                  <List.Icon
                    {...props}
                    color={customColor.text.icon}
                    icon="contact-phone"
                  />
                )}
                descriptionStyle={{ color: customColor.text.desc }}
              />
              <Divider />
              <List.Item
                title=""
                description={markerData.website}
                left={props => (
                  <List.Icon
                    {...props}
                    color={customColor.text.icon}
                    icon="link"
                  />
                )}
                onPress={() => {
                  Linking.openURL(markerData.website)
                }}
                descriptionStyle={{ color: customColor.text.desc }}
              />
              <Divider />
              <List.Item
                title=""
                description={markerData.address}
                left={props => (
                  <List.Icon
                    {...props}
                    color={customColor.text.icon}
                    icon="location-on"
                  />
                )}
                descriptionStyle={{ color: customColor.text.desc }}
              />
              <Divider />
              <List.Item
                title=""
                description={markerData.opening}
                left={props => (
                  <List.Icon
                    {...props}
                    color={customColor.text.icon}
                    icon="access-time"
                  />
                )}
                descriptionStyle={{ color: customColor.text.desc }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
})

export default Detail
