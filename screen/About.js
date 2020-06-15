import React from 'react'
import { Text, View, Platform, StyleSheet, Image } from 'react-native'
import { about } from '../data/about'
import {
  List,
  Searchbar,
  Headline,
  Divider,
  Title,
  Subheading,
} from 'react-native-paper'

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Image
            source={require('../assets/icon.png')}
            style={{ height: 150, width: 150 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            margin: 20,
          }}
        >
          <Headline>App資訊</Headline>
          <Subheading>作者：{about.author}</Subheading>
          <Subheading>版本：{about.version}</Subheading>
          <Subheading>製作日期：{about.lastUpdate}</Subheading>
          <Subheading>Email：{about.email}</Subheading>
          <Subheading>網站：{about.website}</Subheading>
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

export default About
