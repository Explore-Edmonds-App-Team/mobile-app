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
import tourStyles from '../stylesheets/tours-styles';

export default class TourLocation extends Component {
  render() {
    return(
      
      <View style={tourStyles.mainContainer}>

        <Header 
          navigator={this.props.navigator} 
          title={this.props.name}
          hasImage={false}
          type='back'
        />
        
        <Body 
          navigator={this.props.navigator} 
          name={this.props.name} 
          address={this.props.address}
          description={this.props.description}
        />
        
      </View>
  )}
  
}

class Body extends React.Component {
  constructor(props) {
    super(props)    
  }
  
  render() {
    return (
      <View style={tourStyles.bodyContainer}>
        <Text style={tourStyles.activeTourLabel}>
          {this.props.address}
          <Text style={tourStyles.tourText}>{"\n"}{"\n"}{"\t"}{this.props.description}</Text>
        </Text>
      </View>
    );
  }
}
