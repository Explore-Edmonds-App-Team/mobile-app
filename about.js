import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import Header from './commons/header';
import {main} from './stylesheets/main-theme';

export default class About extends Component {
  
  render() {
    return (
            // TODO Actually create an About page
            <View style={main.container}>
              <View style={main.HeaderContainer}>
                <Header title='About' navigator={this.props.navigator}/>
              </View>
              <View style={main.bodyContainer}/>
            </View>
            )
  }
}
