import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  Alert,
  AsyncStorage,
  Button,
  Image,
  ListView,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';


import Header from '../commons/header';
import tourStyles from '../stylesheets/tours-styles';

export default class TourLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURI : this.props.name
    } 
  }
  
  render() {
    return(
      
      <View style={tourStyles.locationContainer}>

        <Image source={require('../media/ScavImages/background.png')} style={{flex: 1, width: null, height: null}}>
          <TouchableHighlight
            onPress={() => this.props.navigator.pop({ refresh: {} })}>
            <Image
              source={require('../media/Icons/BackButton.png')}
              style={tourStyles.icon}
            />
          </TouchableHighlight>

          
          <ScrollView style={tourStyles.infoContainer}>
            <Image
                source={{uri : this.state.imageURI}}
                style={tourStyles.image}
              />
            <Body 
              navigator={this.props.navigator} 
              name={this.props.name} 
              address={this.props.address}
              description={this.props.description}
              />
            
          </ScrollView>
        </Image>
      </View>
  )}
  
}

class Body extends React.Component {
  constructor(props) {
    super(props)    
  }
  
  render() {
    return (
      <View>
        <Text style={tourStyles.title}>
          {this.props.name}{"\n"}
          <Text style={tourStyles.activeTourLabel}>
            {this.props.address}
            <Text style={tourStyles.tourText}>{"\n"}{"\n"}{"\t"}{this.props.description}</Text>
          </Text>
        </Text>
      </View>
    );
  }
}
