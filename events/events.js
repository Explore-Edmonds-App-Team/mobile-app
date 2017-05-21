/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import Header from '../commons/header';
import {main} from '../stylesheets/main-theme';
import {styles} from '../stylesheets/events-styles';

export default class Events extends Component {
  state = {
    backButtonEnabled: true,
  }

  render() {
    return (
      <View style={main.container}>
        <View style={main.HeaderContainer}>
          <Header title='Events' navigator={this.props.navigator}/>
        </View>
        <View style={main.bodyContainer}>
          <View style={styles.webViewContainer}>
            <WebView source={{uri: 'http://edmonds.enterprise.localist.com/'}} style={{marginTop: 20}} />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('webview', () => webview);
