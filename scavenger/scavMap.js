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
var db = require('./db.json');

export default class Scavmap extends Component{
  constructor(props) {
    super(props);
    this.state = {
      markers : this.props.markers
    }
  }
  
  render() {
    if (this.props.index != null){
      var i = this.props.index;
      return (
        <View style={styles.container}>
        <MapView 
          style={styles.MapView}
          provider="google"
          //mapType="hybrid"
          showsUserLocation={true}
          region={{
            latitude: db.places[i].latitude,
            longitude: db.places[i].longitude,
            latitudeDelta: 0.00795,
            longitudeDelta: 0.00795,
           }}
          annotations={this.state.markers}
          /*onRegionChange={() => {}}
          //onRegionChangeComplete={() => {}}
          showsUserLocation={true}
          //followsUserLocation={true}*/
        />
        <Navigation navigator={this.props.navigator}/>
      </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <MapView 
            style={styles.MapView}
            provider="google"
            //mapType="hybrid"
            showsUserLocation={true}
            region={{
              latitude: 47.810814,
              longitude: -122.377902,
              latitudeDelta: 0.025,
              longitudeDelta: 0.025,
             }}
            annotations={this.props.markers}
            /*onRegionChange={() => {}}
            //onRegionChangeComplete={() => {}}
            showsUserLocation={true}
            //followsUserLocation={true}*/
          />
          <Navigation navigator={this.props.navigator}/>
        </View>
        );
    }
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
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
          <View style={{height: 50, width: 50}}/>
        </View>
      );
    }
}