import React from 'react'
import {
  Text,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native'
//import Constants from 'expo'
import Constants from 'expo-constants'
import MapView from 'react-native-maps'
import { locationData } from '../data/index'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: [],
    }

    this.mapRef = null
  }

  componentDidMount() {
    this.loadLocationData()
    this.mapRef.fitToElements(true)
  }

  loadLocationData = () => {
    this.setState({ markers: locationData })
  }

  render() {
    const coords = this.state.markers.map((marker, index) => {
      return {
        latitude: marker.latitude,
        longitude: marker.longitude,
      }
    })

    return (
      <View style={styles.container}>
        <MapView
          style={{
            flex: 1,
            width,
            height,
          }}
          ref={ref => {
            this.mapRef = ref
          }}
          onLayout={() => {
            if (this.state.markers.length) {
              this.mapRef.fitToCoordinates(coords, {
                edgePadding: {
                  top: 10,
                  right: 10,
                  bottom: 10,
                  left: 10,
                },
                animated: false,
              })
            }
          }}
          provider="google"
        >
          {this.state.markers.map((marker, index) => {
            const coords = {
              latitude: marker.latitude,
              longitude: marker.longitude,
            }

            return (
              <MapView.Marker
                key={index}
                coordinate={coords}
                title={marker.title}
                description={marker.desc}
              />
            )
          })}
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
})

export default Map
