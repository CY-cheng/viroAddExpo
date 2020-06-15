import React from 'react'
import {
  Text,
  View,
  Platform,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native'

//import Constants from 'expo'
import Constants from 'expo-constants'
import { locationData } from '../data/index'
import ImageIcon from '../component/ImageIcon'
import { List, Searchbar } from 'react-native-paper'
import { customColor } from '../data/customColor'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '景點列表',
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
      firstQuery: '',
    }
  }

  componentDidMount() {
    this.loadLocationData()
  }

  loadLocationData = () => {
    this.setState({ markers: locationData })
  }

  render() {
    // 處理搜尋字串的部份，如果有填寫要在這個地方進行先過濾
    let data = this.state.markers

    if (
      this.state.firstQuery &&
      this.state.firstQuery.trim() !== ''
    ) {
      data = this.state.markers.filter(item =>
        item.title.includes(this.state.firstQuery)
      )
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1 / 10,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <Searchbar
            placeholder="搜尋"
            onChangeText={query => {
              this.setState({ firstQuery: query })
            }}
            value={this.state.firstQuery}
          />
        </View>
        <View
          style={{
            flex: 9 / 10,
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <List.Item
                title={item.title}
                description={item.desc}
                left={props => <ImageIcon imagePath={item.thumb} />}
                onPress={() =>
                  this.props.navigation.navigate('Detail', {
                    itemId: item.id,
                  })
                }
                titleStyle={{ color: customColor.text.headline }}
                descriptionStyle={{ color: customColor.text.desc }}
              />
            )}
            keyExtractor={(item, index) => `list-item-${index}`}
          />
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

export default Home
