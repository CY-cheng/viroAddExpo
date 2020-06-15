import React from 'react'
import { Text, View, Platform } from 'react-native'

class Category extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'tomato',
        }}
      >
        <Text>Category!</Text>
      </View>
    )
  }
}

export default Category
