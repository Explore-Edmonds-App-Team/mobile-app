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

import {styles} from './stylesheets/home-styles';

export default class Home extends Component {
  
  // Home menu view
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.header}
          source={require('./media/homeButtons/Top/Top1x.png')}
        />
        <TouchableHighlight 
          onPress={() => this.props.navigator.push({
            id: 'Events'
          })}>
        <Image 
          style={styles.button}
          source={require('./media/homeButtons/EventsButton.png')}
        />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => this.props.navigator.push({
            id: 'Map'
          })}>
          <Image
            style={styles.button}
            source={require('./media/homeButtons/MapButton.png')}
          />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => this.props.navigator.push({
            id: 'Scav'
          })}>
          <Image
            style={styles.button}
            source={require('./media/homeButtons/ScavButton.png')}
          />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => this.props.navigator.push({
            id: 'Tours'
          })}>
          <Image 
            style={styles.button}
            source={require('./media/homeButtons/ToursButton.png')}
          />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => this.props.navigator.push({
            id: 'About'
          })}>
          <Image
            style={styles.button}
            source={require('./media/homeButtons/AboutButton.png')}
          />
        </TouchableHighlight>   
      </View>
    )
  } 
}
