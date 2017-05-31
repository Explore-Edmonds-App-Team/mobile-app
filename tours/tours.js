import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  AsyncStorage,
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

export default class Tours extends Component {
  render() {
    return(
      
      <View style={tourStyles.mainContainer}>

        <Header 
          navigator={this.props.navigator} 
          title='Tours'
          hasImage={true}
          />
      
        <Body 
          navigator={this.props.navigator} 
          activeTour={this.props.activeTour} 
          />
             
      </View>
  )}
  
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.getActiveTour = this.getActiveTour.bind(this);
    this.getActiveTour();
    
    this.state = {
      dataSource: ds.cloneWithRows(tourData),
    };
  }
  
  async getActiveTour(){
    try {
      var currTour = await AsyncStorage.getItem('activeTour');
      if (currTour != this.state.activeTour) {
        this.setState({'activeTour': currTour});
      }
    } catch(e) {
      Alert.alert('caught error ' + e);
    }
  }
  
  render() {
    this.getActiveTour();
    return (
      <View style={tourStyles.bodyContainer}>
        <Text style={tourStyles.activeTourLabel}>Active Tour: {this.state.activeTour}</Text>
        
        <ListView
          style={tourStyles.list}
          dataSource={this.state.dataSource}
          renderRow={(tourData, sectionId, rowId) => 
                    <Row navigator={this.props.navigator} index={rowId} {...tourData} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={tourStyles.separator} />}
        />
        
      </View>
    );
  }
}

class Row extends React.Component {
  
  constructor(props) {
    super(props);
    this.navToTour = this.navToTour.bind(this);
  }
  
  navToTour() {this.props.navigator.push(
    {id: 'TourCurrent', 
     passProps: {tourname: this.props.tourname, index: this.props.index}})}
  
  render() {
    return (
      <View style={tourStyles.rowContainer}>
        <Text style={tourStyles.tourName}>
          {this.props.tourname}
          {<Text style={tourStyles.tourText}>
          {"\n"}Length: {this.props.length} locations
          </Text>}
        </Text>
        <TouchableHighlight
                          onPress = {this.navToTour}
                          style={tourStyles.rowButton}>
                        <Text style={tourStyles.goToButton}>Go To Tour</Text> 
        </TouchableHighlight>
      </View>
    );
  }

};
