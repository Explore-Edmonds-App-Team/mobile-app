'use strict';

/*Scavenger Hunt Game*/

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  AsyncStorage,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Header from '../commons/header';
import {styles} from '../stylesheets/scav-styles';
import {main} from '../stylesheets/main-theme';

//links to JSON file with list of viable codes, locations and pictures
var db = require('./db.json');

export default class Scavenger extends Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  }
  
  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }
  
  render() {
    return (
      <View style={main.container}>
        <View style={main.headerContainer}>
          <Header title='Scavenger Hunt' navigator={this.props.navigator}/>
        </View>
        <View style={main.bodyContainer}>
          <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
          <View style={styles.homeRow}>
            <TextInput
              ref={component => this._textInput = component}
              style={styles.input}
              autoCapitalize='none'
              placeholder='Enter Code'
              placeholderTextColor='black'
              returnKeyType='go'
              //need to fix clear text to wait until user presses okay
              onSubmitEditing={(event) => this.tryCode(event.nativeEvent.text).then(this.clearText)}
            />
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
      var value = await AsyncStorage.getItem(db.places[i].code);
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
      var value = await AsyncStorage.getItem(db.places[i].code);
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
  async tryCode(code){
    try {
      let value = await AsyncStorage.getItem(code);
      if (value == 'true'){
        Alert.alert("Sorry you've already found that code");
      }
      else if (value == null){
        for (var i = 0; i < db.places.length; i++){
          if (db.places[i].code == code){
            AsyncStorage.setItem(code, "true");
            Alert.alert(
                  'Congrats!',
                  'You found ' + db.places[i].name,
                  [
                    {text: 'Show Info', onPress: () => this.loadLocation(i)},
                    {text: 'Close'},
                  ]
                );
            return;
          }
        }
        Alert.alert("Sorry " + code + " is an incorrect code");
      }
      else {
        Alert.alert('Error: code value = ' + value);
      }
    } catch(e) {
      Alert.alert('caught error ' + e);
    }
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
  
  async resetVisited(){
    try {
      for (var i = 0; i < db.places.length; i++){
        await AsyncStorage.removeItem(db.places[i].code);
      }
      Alert.alert("You've reset the hunt!");
    } catch(e) {
      Alert.alert('caught error ' + e);
    }
  }

  setCode = (code) =>{
    AsyncStorage.setItem("code", code);
    Alert.alert('set code as ' + code);
  }
  
  async findAll(){
    for (var i = 0; i < db.places.length; i++){
      await AsyncStorage.setItem(db.places[i].code, "true");
    }
    Alert.alert('You found everything . . . cheater');
  }

}