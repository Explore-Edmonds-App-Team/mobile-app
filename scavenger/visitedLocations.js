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
import tourStyles from '../stylesheets/tours-styles';
import {main} from '../stylesheets/main-theme';

var db = require('./db.json');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ScavVisited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource : ds.cloneWithRows(props.places)
    }
  }

  render() {
    if (this.props.places.length == 0){
      return(
        <View style={main.container}>
          <View style={main.headerContainer}>
            <Header title='Visited Locations' navigator={this.props.navigator} type='back' />
          </View>
          <View style={main.bodyContainer}>
            <View style={styles.centerText}>
              <Text style={{fontWeight: 'bold', marginBottom: 25}}> 
                You haven't found any locations yet 
                {'\n'} click show map to start the hunt
              </Text>
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
          </View>
        </View>);
    } else {
      return (
        <View style={main.container}>
          <View style={main.headerContainer}>
            <Header title='Visited Locations' navigator={this.props.navigator} type='back' />
          </View>
          <View style={main.bodyContainer}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionId, rowId) =>
                <Row navigator={this.props.navigator} rowData={rowData} rowId={rowId}/>
              }
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          </View>
        </View>
      );
    }
  }
  
    async buildMarkers(){
    var markers = []
    for (var i = 0; i < db.places.length; i++){
      var marker = this.buildMArker(i, 'red');
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
}

class Row extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.rowId % 2 == 0){
      return (
          <TouchableHighlight
            onPress={() => this.props.navigator.push({
              id: 'ScavLocation',
              passProps: {
                title: this.props.rowData.title,
                index: this.props.rowData.index
              }
            })}>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>
              {this.props.rowData.title}
              {<Text style={styles.visitedAddress}>
                {"\n"}{this.props.rowData.address}
              </Text>}
            </Text>
            </View>
          </TouchableHighlight>  
      );
    }else{
      return (
        <View style={styles.evenBackground}>
          <TouchableHighlight
            onPress={() => this.props.navigator.push({
              id: 'ScavLocation',
              passProps: {
                title: this.props.rowData.title,
                index: this.props.rowData.index
              }
            })}>
            <View style={styles.rowContainer}>
                <Text style={styles.title}>
                  {this.props.rowData.title}
                  {<Text style={styles.visitedAddress}>
                    {"\n"}{this.props.rowData.address}
                  </Text>}
                </Text>
              </View>
          </TouchableHighlight> 
        </View>
      );
    }
  }

}