import React, { Component } from 'react';

import {
	DefaultTheme,
	Provider as PaperProvider,
  } from 'react-native-paper'
import TabNavigator from './navigation/TabNavigator'

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
	  ...DefaultTheme.colors,
	  primary: '#3498db',
	  accent: '#f1c40f',
	},
  }

export default class ViroSample extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<PaperProvider theme={theme}>
				<TabNavigator />
			</PaperProvider>
		);
	}
}

module.exports = ViroSample;
