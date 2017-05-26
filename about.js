import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  Image,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import Header from './commons/header';
import {main} from './stylesheets/main-theme';
import {styles} from './stylesheets/about-styles';

export default class About extends Component {
  
  render() {
    return (
            <View style={main.container}>
              <View style={main.HeaderContainer}>
                <Header title='About' navigator={this.props.navigator}/>
              </View>
              <View style={main.bodyContainer}>
                <ScrollView style={styles.scrollContainer}>
                  <Text>
                  Welcome to the Visit Edmonds app. {'\n\n'}
                  Talk about the city. {'\n\n'}
                  Talk about the sustainable cities project. {'\n\n'}
                  Talk about the developers (us!)
                </Text>
                </ScrollView>
              </View>
            </View>
            )
  }
}
