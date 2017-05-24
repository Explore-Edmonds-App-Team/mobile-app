'use strict';

/*Scavenger Hunt Game*/

import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Header from '../commons/header';
import {styles} from '../stylesheets/scav-styles';
import {main} from '../stylesheets/main-theme';

//links to JSON file with list of viable latitude and longitude, locations and pictures
var db = require('./db.json');

export default class Scavenger extends Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
  }
  
  render() {
    return (
      <View style={main.container}>
        <View style={main.headerContainer}>
          
          <Header title='Scavenger Hunt' navigator={this.props.navigator} hasImage={true}/>
          
        </View>
        <View style={main.bodyContainer}>
          <View>
      </View>
        <View style={styles.homeRow}>
          <UnlockButton navigator={this.props.navigator}/>
        </View>
          <View style={styles.homeRow}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.buildMarkers()
                  .then( (marker) => 
                      this.props.navigator.push({
                        id: 'ScavMap',
                        passProps: {
                          markers: marker
                        }
                      })
                    )
                } 
                title="Show Map" 
                color="black" 
                accessibilityLabel="Show Map"
              />
            </View>
            </View>
          <View style={styles.homeRow}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.buildList()
                  .then ( (list) =>
                    this.props.navigator.push({
                      id: 'ScavVisited',
                      passProps: {
                        places : list,
                      }
                    })
                  )
                }
                title="Visited Locations" 
                color="black" 
                accessibilityLabel="Visited Locaitons"
              />
            </View>
            </View>
          <View style={styles.homeRow}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.props.navigator.push({
                    id: 'ScavInstruct'})} 
                title="Instructions" 
                color="black" 
                accessibilityLabel="Instructions"
              />
            </View>
            </View>
          <View style={styles.homeRow}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => Alert.alert(
                  'Reset Hunt',
                  'Are you sure you want to reset the hunt?',
                  [
                    {text: 'YES', onPress: () => this.resetVisited()},
                    {text: 'CANCEL', onPress: () => console.log('Cancel Pressed!')},
                  ]
                )} 
                title="Reset Hunt" 
                color="black" 
                accessibilityLabel="Reset Hunt"
              />
            </View>
            </View>
          <View style={styles.homeRow}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.findAll()} 
                title="Find All" 
                color="black" 
                accessibilityLabel="Find All"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  async buildList(){
    var list = [];
    for (var i = 0; i < db.places.length; i++){
      var value = await AsyncStorage.getItem(db.places[i].name);
      if (value == "true"){
        var value = {
          index: i,
          title: db.places[i].name,
          address: db.places[i].address,
        }
        list.push(value);
      }
    }
    return list;
  }
  
  async buildMarkers(){
    var markers = []
    for (var i = 0; i < db.places.length; i++){
      var value = await AsyncStorage.getItem(db.places[i].name);
      var color = (value == "true" ? 'green' : 'red');
      var marker = this.buildMArker(i, color);
      markers.push(marker);
    }
    return markers;
  }
  
  buildMArker(i, color){
    var marker = {
      latitude: db.places[i].latitude,
      longitude: db.places[i].longitude,
      title: db.places[i].name,
      tintColor: color,
    }
    return marker;
  }
  
  clearText(){
    this._textInput.setNativeProps({text: ''});
  }
  
  async resetVisited(){
    try {
      for (var i = 0; i < db.places.length; i++){
        await AsyncStorage.removeItem(db.places[i].name);
      }
      Alert.alert("You've reset the hunt!");
    } catch(e) {
      Alert.alert('caught error ' + e);
    }
  }
  
  async findAll(){
    for (var i = 0; i < db.places.length; i++){
      await AsyncStorage.setItem(db.places[i].name, "true");
    }
    Alert.alert('You found everything . . . cheater');
  }
}

class UnlockButton extends React.Component {
    state = {
      index: -1,
      nearUnfoundPlace: false,
      latitude: 0,
      longitude: 0,
    };

  componentDidMount(){
    this.checkLocation();
  }
  
  async checkLocation(){
    await this.getLocation();
    
    var distance = 0;
    for (var i = 0; i < db.places.length; i++){
      var lat = db.places[i].latitude;
      var long = db.places[i].longitude;
      distance = await Math.sqrt(Math.pow((this.state.longitude - long),2) + Math.pow((this.state.latitude - lat),2));
      if (distance <= 0.00025){
        var value = await AsyncStorage.getItem(db.places[i].name);
          if (value != 'true'){
            this.setState({
              index: i,
              nearUnfoundPlace: true,
            })
            return;
          }
      }
    }
  }
  
  async getLocation() {
     navigator.geolocation.getCurrentPosition(
      (position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        this.setState({
          latitude: lat,
          longitude: long,
        }
        );
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  loadLocation(index){
    this.props.navigator.push({
      id: 'ScavLocation',
        passProps: {
          title: db.places[index].name,
          index: index,
      }
     })
  }
  
  unlockLocation(){
    AsyncStorage.setItem(db.places[this.state.index].name, 'true');
    var index = this.state.index;
    Alert.alert(
      'Congrats!',
      'You found ' + db.places[this.state.index].name,
      [
        {text: 'Show Info', onPress: () => this.loadLocation(index)},
        {text: 'Close'},
      ]
    );
      this.setState({
        index: -1,
        nearUnfoundPlace: false,
      })
  }
  
  render(){    
    if(this.state.nearUnfoundPlace){
      return (
        <View style={styles.greenButton}>
          <Button
            style={styles.button}
            onPress={() => this.unlockLocation()} 
            title="Unlock Objective" 
            color="black" 
            accessibilityLabel="Unlock"
          />
        </View>
      );
    } else {
      return(
        <View style={styles.refreshButton}>
            <Button
              style={styles.button}
              onPress={() => this.checkLocation()} 
              title="Refresh" 
              color="black" 
              accessibilityLabel="Refresh"
            />
          </View>
        );
    }
  }
}