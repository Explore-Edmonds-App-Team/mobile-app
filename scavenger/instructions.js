/*Instruction page for how to interact with the Scavenger Hunt*/

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Header from '../commons/header';
import {styles} from '../stylesheets/scav-styles';
import {main} from '../stylesheets/main-theme';

export default class ScavInstruct extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={main.container}>
        <View style={main.headerContainer}>
          <Header title='Instructions' navigator={this.props.navigator} type='back'/>
        </View>
        <View style={main.bodyContainer}>
          <Body/>
        </View>
      </View>
    );
  }
}

class Body extends Component {
  
  render(){
    return(
      <ScrollView style={styles.bodyContainer}>
        <Text> Instructions go here </Text>
      </ScrollView>
    );
  }
}