//Constructs a common header
//builds title, home/back button, and background image.

import React, { Component } from 'react';
import { Image, Text, StyleSheet, TouchableHighlight, View } from 'react-native';

import {styles} from '../stylesheets/header-styles';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      imageURI : this.props.title,
    }
  }
  
  render() {
    if (this.props.type == 'back'){
      return (
        <View style={styles.headerContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigator.pop({ refresh: {} })}>
              <Image
              source={require('../media/Icons/BackButton.png')}
              style={styles.backButton}
              />
            </TouchableHighlight>
            <Image
                source={{uri : this.state.imageURI}}
                style={styles.image}
                />
          </View>
      );
    } else {
      return (
        <View style={styles.headerContainer}>
          <TouchableHighlight
              onPress={() => this.props.navigator.popToTop()}>
              <Image
              source={require('../media/Icons/home.png')}
              style={{width:50, height: 50}}
              />
            </TouchableHighlight>
            <Image
                source={{uri : this.state.imageURI}}
                style={styles.image}
                />
          </View>
      );
    }
  }
}