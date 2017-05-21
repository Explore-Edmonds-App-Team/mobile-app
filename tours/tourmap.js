import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View,
  Image,
  Alert,
  Navigator,
  MapView,
} from 'react-native'

import {styles} from '../stylesheets/map-styles';

export default class TourMap extends Component{
  constructor(props) {
    super(props);
    this.state = {
      markers: this.props.tourMarkers
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.MapView}
          provider="google"
          //mapType="hybrid"
          showsUserLocation={true}
          region={{
              latitude: 47.8107,
              longitude: -122.3774,
              latitudeDelta: 0.00795,
              longitudeDelta: 0.00795,
           }}
          annotations={this.state.markers}
        />
        <Navigation navigator={this.props.navigator}/>
      </View>
      );
  }  
}

  class Navigation extends Component {
    render() {
      return (
        <View style={styles.buttons}>
          <TouchableHighlight
            label='Home'
            onPress={(event) => this.props.navigator.popToTop()}
            underlayColor={'transparent'}
          >
            <Image  
              style={[{backgroundColor:'rgba(255,255,255,.6)'},styles.icon]} 
              source={require('../media/Icons/home.png')}
            />  
          </TouchableHighlight>
          <TouchableHighlight
            label='Back'
            onPress={() => this.props.navigator.pop()}
            underlayColor={'transparent'}
          >
            <Image
              style={[{backgroundColor:'rgba(255,255,255,.6)'},styles.icon]}
              source={require('../media/Icons/BackButton.png')}
            />
          </TouchableHighlight>
        </View>
      );
    }
}