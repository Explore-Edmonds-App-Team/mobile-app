/**
 *  Explore Edmonds App
 *
 *  Author: City Explorers
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
} from 'react-native'

import About from './about';
import Events from './events/events';
import Home from './home';
import Map from './map/map';
import Scav from './scavenger/scavenger';
import ScavLocation from './scavenger/location';
import ScavInstruct from './scavenger/instructions';
import ScavMap from './scavenger/scavMap';
import ScavVisited from './scavenger/visitedLocations';
import Tours from './tours/tours';
import TourCurrent from './tours/tourcurrent';
import TourMap from './tours/tourmap';

class Project extends Component {
  
  render() {
    return (
      
      // The parent navigator that controls the scene route
      <Navigator
        initialRoute={ {id: 'Home'} }
        renderScene={ this.renderScene }
            
      />
    );
  }//end render
  
  // Called each time a scene switch is desired
  renderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Home':
        return <Home navigator={navigator} />;
      case 'Events':
        return <Events navigator={navigator} />;
      case 'Map':
        return <Map navigator={navigator} {...route.passProps}/>;
      case 'Scav':
        return <Scav navigator={navigator} />;
      case 'ScavInstruct':
        return <ScavInstruct navigator={navigator} />;
      case 'ScavLocation':
        return <ScavLocation navigator={navigator} {...route.passProps} />;
      case 'ScavMap':
        return <ScavMap navigator={navigator} {...route.passProps}/>;
      case 'ScavVisited':
        return <ScavVisited navigator={navigator} {...route.passProps} />;
      case 'Tours':
        return <Tours navigator={navigator} />;
      case 'TourCurrent':
        return <TourCurrent navigator={navigator} {...route.passProps} />;
      case 'TourMap':
        return <TourMap navigator={navigator} {...route.passProps} />;
      case 'About':
        return <About navigator={navigator} />
    }
  }//end renderScene
  
}

// Constant variables
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#75a9f9',
  },
  
  button: {
    height: screenH/7,
    width: screenW,
  },

});

AppRegistry.registerComponent('Visit_Edmonds', () => Project);
