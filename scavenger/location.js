/*Displays info on the scavenger hunt location*/

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Header from '../commons/header';
import {styles} from '../stylesheets/scav-styles';

var db = require('./db.json');

export default class ScavLocation extends Component {
  constructor(props) {
    super(props);
    var i = props.index;
    this.state = {
      creator : db.places[i].creator,
      year : db.places[i].year,
      address : db.places[i].address,
      description : db.places[i].description,
      imageURI : this.props.title
    } 
  }

  render() {
      return(
      <View style={styles.locationContainer}>
          <Image source={require('../media/ScavImages/background.png')} style={{flex: 1, width: null, height: null}}>
            <TouchableHighlight
              onPress={() => this.props.navigator.pop({ refresh: {} })}>
              <Image
                source={require('../media/Icons/BackButton.png')}
                style={styles.icon}
              />
            </TouchableHighlight>
            <ScrollView style={styles.infoContainer}>
              <Image
                source={{uri : this.state.imageURI}}
                style={styles.image}
              />
              <Text style={styles.title}>{this.props.title}</Text>
              <Creator creator={this.state.creator} year={this.state.year}/>
              <Address address={this.state.address}/>
              <Description description={this.state.description}/>
            </ScrollView>
            <View style={{flex: 0.175, flexDirection: 'column'}}>
              <View style={styles.locationButton}>
                <View style={{marginTop: -7}}>
                <Button
                  onPress={() => this.buildMarker()
                    .then( (marker) => 
                      this.props.navigator.push({
                        id: 'ScavMap',
                          passProps: {
                          index: this.props.index,
                          markers: marker
                        }
                      })
                    )
                  }
                  title="Show on Map"
                  color="black"
                  accessibilityLabel="Show on Map"
                />
                </View>
            </View>
         </View>
      </Image>
      </View>);
  }
  
  async buildMarker(){
    var i = this.props.index;
    var marker = [{
        latitude: db.places[i].latitude,
        longitude: db.places[i].longitude,
        title: this.props.title,
        tintColor: 'green',
      }];

    return marker;
  }
}

class Creator extends Component {
    render() {
      if (this.props.creator != ""){
        return (
          <Text style={styles.creator}>By {this.props.creator}, {this.props.year}</Text>
        );
      } else if ( this.props.year != ""){
        return (
          <Text style={styles.creator}>{this.props.year}</Text>
        );
      } else {
        return (<Text/>);
      }
    }
}

class Address extends Component {
    render() {
      return (
        <Text style={styles.address}>{this.props.address}</Text>
      );
    }
}

class Description extends Component {
    render() {
      return (
        <Text style={styles.description}>{this.props.description}</Text>
      );
    }
}