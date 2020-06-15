import React from 'react'
import { Text, View, Platform } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Home from '../screen/Home'
import Map from '../screen/Map'
import Detail from '../screen/Detail'
import About from '../screen/About'

import { customColor } from '../data/customColor'

const HomeStack = createStackNavigator({
  Home,
  Detail,
})

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '景點',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={24}
            name="md-home"
            style={{ color: tintColor }}
          />
        ),
        gesturesEnabled: false,
      },
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: '地圖',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={24}
            name="md-pin"
            style={{ color: tintColor }}
          />
        ),
        gesturesEnabled: false,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: '關於',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={24}
            name="md-information-circle"
            style={{ color: tintColor }}
          />
        ),
        gesturesEnabled: false,
      },
    },
  },
  {
    shifting: true, //control tab icon text shifting
    initialRouteName: 'Home',
    activeColor: customColor.tab.activeColor,
    inactiveColor: customColor.tab.inactiveColor,
    barStyle: { backgroundColor: customColor.tab.backgroundColor },
  }
)

export default createAppContainer(TabNavigator)
