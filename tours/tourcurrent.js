import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  Alert,
  AsyncStorage,
  Button,
  Image,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';


import Header from '../commons/header';
import tourData from './tourData';
import tourStyles from '../stylesheets/tours-styles';

var activeTour = require('./tourActive.json');

export default class TourCurrent extends Component {
  render() {
    return(
      
      <View style={tourStyles.mainContainer}>

        <Header 
          navigator={this.props.navigator} 
          title={'Tours'}
          hasImage={true}
          type='back'
        />
        
        <Body 
          navigator={this.props.navigator} 
          tourname={this.props.tourname} 
          index={this.props.index}
        />
        
      </View>
  )}
  
}

class Body extends React.Component {
  constructor(props) {
    super(props)
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    var tourLocations = tourData[this.props.index].locations;
    var tourCount = tourLocations.length;
    
    this.state = {
      dataSource: ds.cloneWithRows(tourLocations),
      activeTour: 'None',
      initial: true,
    };
    
    this.tourToMap = this.tourToMap.bind(this);
    this.activateTour = this.activateTour.bind(this);
    this.deactivateTour = this.deactivateTour.bind(this);
    this.getActiveTour = this.getActiveTour.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  
  
  async activateTour() {
    var currTour = await AsyncStorage.getItem('activeTour');
    if (currTour == this.props.tourname) {
      Alert.alert(this.props.tourname + '\nis already your active tour.')
    }
    else {
      Alert.alert(
        'Make Active Tour',
        'Are you sure you want to make \n' + this.props.tourname + ' your active our? \nCurrent tour: ' + currTour,
        [
          {text: 'Yes', onPress: () => this.setTour(true)},
          {text: 'Cancel'},
        ]
      )
    }
  }
  
  async deactivateTour() {
    Alert.alert(
      'Deactivate Tour',
      'Are you sure you want to deactivate this tour?',
        [
          {text: 'Yes', onPress: () => this.setTour(false)},
          {text: 'Cancel'},
        ]
      )
  }
  
  async getActiveTour(){
    if (this.state.initial) {
      try {
        var currTour = await AsyncStorage.getItem('activeTour');
        this.setState({'activeTour': currTour, 'initial': false});
      } catch(e) {
        Alert.alert('caught error ' + e);
      }
    }
  }
  
  async setTour(activate) {
    if (activate) {
      AsyncStorage.setItem("activeTour", this.props.tourname);
      AsyncStorage.setItem("index", this.props.index);
      this.setState({'activeTour': this.props.tourname});
    } else {
      AsyncStorage.setItem("activeTour", 'None');
      AsyncStorage.setItem("index", (-1).toString());
      this.setState({'activeTour': 'None'});
    }
  }
  
  createMarkers() {
    var tourMarkers = [];
    var locations = tourData[this.props.index].locations;
    for (var i = 0; i < locations.length; i++) {
      var currLocation = locations[i];
      var currMarker = {
        latitude: currLocation.latitude,
        longitude: currLocation.longitude,
        title: currLocation.name,
        tintColor: 'black',
      }
      tourMarkers.push(currMarker);
    }  
    return tourMarkers;
  }
  
  isActive() {
    var result = false;
    if (this.state.activeTour == this.props.tourname) {
      result = true;
    }
    return result;
  }
  
  tourToMap() {
    var tourMarkers = this.createMarkers();
    this.props.navigator.push({
      id: 'TourMap',
      passProps: {
        tourname: this.props.tourname, 
        index: this.props.index,
        tourMarkers: tourMarkers,
      },
    })
  }
  
  render() {
    this.getActiveTour();
    if (this.isActive() == true) {
      return (
        <View style={tourStyles.bodyContainer}>

          <Text style={tourStyles.activeTourLabel}>{this.props.tourname}</Text>

          <ListView
              style={tourStyles.list}
              dataSource={this.state.dataSource}
              renderRow={(tourLocations) => <Row navigator={this.props.navigator} {...tourLocations} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={tourStyles.separator} />}
          />
          
          <View style={tourStyles.buttonContainer}>
              <Button
                onPress={() => this.deactivateTour()}
                title="Deactivate Tour" 
                color="#FFFFFF" 
                accessibilityLabel="Deactivate Tour"
              />
          </View>

          <View style={tourStyles.buttonContainer}>
              <Button
                onPress={() => this.tourToMap(this.tourLocations)}
                title="Map View" 
                color="#FFFFFF" 
                accessibilityLabel="Map View"
              />
          </View>
          
        </View>
      );
    } else {
      return (
        <View style={tourStyles.bodyContainer}>
          
          <Text style={tourStyles.activeTourLabel}>{this.props.tourname}</Text>

          <ListView
              style={tourStyles.list}
              dataSource={this.state.dataSource}
              renderRow={(tourLocations, sectionId, rowId) => <Row 
                                              navigator={this.props.navigator} 
                                              index={rowId} 
                                              tourindex={this.props.index}
                                              {...tourLocations} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={tourStyles.separator} />}
          />
          
          <View style={tourStyles.buttonContainer}>
              <Button
                onPress={() => this.activateTour()}
                title="Make Active Tour" 
                color="#FFFFFF" 
                accessibilityLabel="Activate Tour"
              />
          </View>

          <View style={tourStyles.buttonContainer}>
              <Button
                onPress={() => this.tourToMap(this.tourLocations)}
                title="Map View" 
                color="#FFFFFF" 
                accessibilityLabel="Map View"
              />
          </View>
          
        </View>
      );
    }
  }
}

class Row extends React.Component {
  
  constructor(props) {
    super(props);
    this.navToLocation = this.navToLocation.bind(this);
  }
  
  navToLocation() {this.props.navigator.push(
    {id: 'TourLocation', 
     passProps: {name: this.props.name, 
                 address: this.props.address, 
                 description:this.props.description}})}
  
  render() {
    return (
      <View style={tourStyles.rowContainer}>
        <Text style={tourStyles.tourName}>
          {this.props.name}
          {<Text style={tourStyles.tourText}>
          {"\n"}{this.props.address}
          </Text>}
        </Text>
        <TouchableHighlight
                          onPress = {this.navToLocation}
                          style={tourStyles.rowButton}>
                        <Text style={tourStyles.goToButton}>Info</Text> 
        </TouchableHighlight>
      </View>
    );
  }

};
