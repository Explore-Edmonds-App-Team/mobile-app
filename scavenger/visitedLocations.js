/*List of locations found during the scavenger hunt*/

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  AsyncStorage,
  Button,
  Image,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import Header from '../commons/header';
import {styles} from '../stylesheets/scav-styles';
import {main} from '../stylesheets/main-theme';

var db = require('./db.json');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ScavVisited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource : ds.cloneWithRows(props.visited)
    }
  }

  render() {
    if (this.props.visited.length == 0){
      return(
        <View style={main.container}>
          <View style={main.headerContainer}>
            <Header title='Visited Locations' navigator={this.props.navigator} type='back' />
          </View>
          <View style={main.bodyContainer}>
            <Text> You haven't found any locations yet </Text>
          </View>
        </View>);
    } else {
      return (
        <View style={main.container}>
          <View style={main.headerContainer}>
            <Header title='Visited Locations' navigator={this.props.navigator} type='back' />
          </View>
          <View style={main.bodyContainer}>
            <View style={styles.divider}/>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                  <View style={styles.buttonContainer}>
                      <Button
                        style={styles.button}
                        onPress={() => this.props.navigator.push({
                          id: 'ScavLocation',
                          passProps: {
                            title: rowData.title,
                            index: rowData.index
                          }
                        })}
                        title={rowData.title}
                        color="black" 
                        accessibilityLabel="Tap on Me"
                      />
                  </View>
              }
            />
          </View>
        </View>
      );
    }
  }
}