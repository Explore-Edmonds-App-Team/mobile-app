//map.js

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View,
  Image,
  Alert,
  Navigator,
  MapView,
} from 'react-native'

import {markers} from './markers.js';
import {styles} from '../stylesheets/map-styles';

import tourData from '../tours/tourData';
var activeTour = require('../tours/tourActive.json');

var empty = [];
var marker = [];
var food = [];
var gov = [];
var parking = [];
var parks = [];
var retail = [];
var art = [];
var history = [];
var tours = [];
var bath = [];

var toggled = false;
var pushed = 'rgba(188,188,205, .9)';
var not_pushed = 'rgba(250,250,255,.9)';

//var home_tog= not_pushed;
var his_tog= not_pushed;
var food_tog= not_pushed;
var gov_tog= not_pushed;
var art_tog= not_pushed;
var parking_tog= not_pushed;
var retail_tog= not_pushed;
var bath_tog= not_pushed;
var tours_tog= not_pushed;

//var GoogleMapsAPI = require('googlemaps');

var publicConfig = {
    key: 'AIzaSyDkb_JpBu07c9yHx3GDkMpk-KUaVmdcpPw',
    stagger_time:       1000, // for elevationPath
    encode_polylines:   false,
    secure:             true, // use https
    //proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
  };
//var gmAPI = new GoogleMapsAPI(publicConfig);

/*const CLIENT_ID = 'V4215IT2BRF4EXWEUTUEACMM1IEEK3GNMHHINMIPB1UA5NOD';
const CLIENT_SECRET = 'ITN1RZKDKX2BU5FJ5RGUFFQTRPPLDSWEICKSWMROEJMMGGT0';
const FOURSQUARE_ENDPOINT = 'https://api.foursquare.com/v2/venues/explore';
const API_DEBOUNCE_TIME = 2000;*/
//<Icon label='Food'/>
class Icon extends Component{
  constructor(props) {
    super(props);
    
    this.getActiveTour = this.getActiveTour.bind(this);
    this.createMarkers = this.createMarkers.bind(this);
    this.state = {
      initial: true,
    }
  }
  
  async getActiveTour(){
    if (this.state.initial) {
      try {
        var ix = parseInt(await AsyncStorage.getItem('index'));
        if (ix >= 0) {
          this.setState({'initial': false, 'tourIndex': ix});
          tourPerm = this.createMarkers();
        }
      } catch(e) {
        Alert.alert('caught error ' + e);
      }
    }
  }
  
  createMarkers() {
    var tourMarkers = [];
    var locations = tourData[this.state.tourIndex].locations;
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
  
  toggleStatus_Food() {
    if(food.length == 0){food = markers.food;}
    else{food = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Gov() {
    if(gov.length == 0){gov = markers.gov;}
    else{gov = [];}
    //var nums = num1.concat(num2, num3);
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Parking() {
    if(parking.length == 0){parking = markers.parking;}
    else{parking = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Art() {
    if(art.length == 0){art = markers.art;}
    else{art = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Parks() {
    if(parks.length == 0){parks = markers.parks;}
    else{parks = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Retail() {
    if(retail.length == 0){retail = markers.retail;}
    else{retail = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_History() {
    if(history.length == 0){history = markers.history;}
    else{history = [];}
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker })
  };
  toggleStatus_Tour() {
    if (tour.length == 0) {
      tour = tourPerm;
    } else {
      tour = [];
    }
    marker = empty.concat(food,parking,gov,art,parks,retail,history,tour);
    this.setState({ markers: this.marker });
  }
  
  render() {
    this.getActiveTour();
    return (
      <View style={styles.container}>
        
        <MapView 
            style={styles.MapView}
            provider="google"
            //mapType="hybrid"
            showsUserLocation={true}
            region={{
              latitude: 47.8107,
              longitude: -122.3774,
              latitudeDelta: 0.00795,
              longitudeDelta: 0.00795,
            }}
            annotations={marker}
          /*onRegionChange={() => {}}
          //onRegionChangeComplete={() => {}}
          showsUserLocation={true}
          //followsUserLocation={true}*/>
        </MapView>
        
        <View style={styles.buttons}>
              <View style={[{backgroundColor:not_pushed},styles.icon_container]}>
                <TouchableHighlight
                        label='Home'
                        onPress={(event) => this.props.navigator.pop({
                          id: 'Home'})}
                        underlayColor={'transparent'}
                  >
                      <Image  
                        //style={[{backgroundColor:not_pushed},styles.icon]} 
                        style={styles.icon}
                        source={require('../media/Icons/home.png')}
                      />  
                </TouchableHighlight>
              </View>
          
          {/*<View style={[{backgroundColor:food_tog},styles.icon_container]}> 
              <TouchableHighlight
                        label='Food'
                        onPress={() => this.toggleStatus_Food()}
                        underlayColor={'transparent'}
                  >
                      <Image  
                        //style={[{backgroundColor:food_tog},styles.icon]}
                        style={styles.icon}
                        source={require('../media/Icons/Food-50.png')}
                      />  
              </TouchableHighlight>
            </View> */}
             
            <View style={[{backgroundColor:gov_tog},styles.icon_container]}>
                <TouchableHighlight
                      label='Gov' //IMPORTANT FACILITIES
                      onPress={() => this.toggleStatus_Gov()}
                      underlayColor={'transparent'}
                  >
                    <Image  
                      //style={[{backgroundColor:gov_tog},styles.icon]} 
                      style={styles.icon}
                      source={require('../media/Icons/Monument-50.png')}
                    />  
                </TouchableHighlight>
            </View>
          
          {/*<!--<View style={[{backgroundColor:gov_tog},styles.icon_container]}>
                <TouchableHighlight
                      label='History'
                      onPress={() => this.toggleStatus_History()}
                      underlayColor={'transparent'}
                  >
                    <Image  
                      //style={[{backgroundColor:his_tog},styles.icon]} 
                      source={require('../media/Icons/Museum-50.png')}
                    />  
                </TouchableHighlight>
            </View>-->*/}
            <View style={[{backgroundColor:art_tog},styles.icon_container]}>
                <TouchableHighlight
                      label='Art' //COMBINE ART & HISTORY SITES
                      onPress={() => this.toggleStatus_Art()}
                      underlayColor={'transparent'}
                  >
                    <Image  
                      //style={[{backgroundColor:art_tog},styles.icon]} 
                      style={styles.icon}
                      source={require('../media/Icons/PaintBrush-50.png')}
                    />  
                </TouchableHighlight>
            </View>
          
            <View style={[{backgroundColor:parking_tog},styles.icon_container]}>
                <TouchableHighlight
                      label='Parking'
                      onPress={() => this.toggleStatus_Parking()}
                      underlayColor={'transparent'}
                  >
                    <Image  
                      //style={[{backgroundColor:parking_tog},styles.icon]}
                      style={styles.icon}
                      source={require('../media/Icons/Parking-50.png')}
                    />  
                </TouchableHighlight>
            </View> 
              
          {/*<!--<TouchableHighlight
                      label='Retail'
                      onPress={() => this.toggleStatus_Retail()}
                      underlayColor={'transparent'}
                  >
                    <Image
                      style={[{backgroundColor:'rgba(188,143,143,.6)'},styles.icon]} 
                      source={require('../media/Icons/ShoppingCart-64.png')}
                    />  
                </TouchableHighlight>-->*/}
          
            <View style={[{backgroundColor:bath_tog},styles.icon_container]}>
                <TouchableHighlight
                      label='Bathrooms' 
                      onPress={() => this.toggleStatus_bath()} //SET TO BATHROOMS AHHHHHHH
                      underlayColor={'transparent'}
                  >
                    <Image 
                      //style={[{backgroundColor:bath_tog},styles.icon]} 
                      style={styles.icon}
                      source={require('../media/Icons/SeaWaves-50.png')}
                    />  
                </TouchableHighlight>
            </View>
          
            <View style={[{backgroundColor:tours_tog},styles.icon_container]}>
                  <TouchableHighlight
                        label='Tours'
                        onPress={() => this.toggleStatus_tours()}
                        underlayColor={'transparent'}
                    >
                      <Image  
                        //style={[{backgroundColor:his_tog},styles.icon]} 
                        style={styles.icon}
                        source={require('../media/Icons/Museum-50.png')}
                      />  
                  </TouchableHighlight>
            </View>

        </View>
      </View> 
    );
  } 

    toggleStatus_bath() {
      if(bath.length == 0){bath = markers.bath;}
      else{bath = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(bath_tog == pushed){bath_tog = not_pushed;}
      else{bath_tog = pushed;}
    };
    toggleStatus_tours() {
      if(tours.length == 0){tours = markers.tours;}
      else{tours = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(tours_tog == pushed){tours_tog = not_pushed;}
      else{tours_tog = pushed;}
    };
    toggleStatus_Food() {
      if(food.length == 0){food = markers.food;}
      else{food = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(food_tog == pushed){food_tog = not_pushed;}
      else{food_tog = pushed;}
    };
    toggleStatus_Gov() {
      if(gov.length == 0){gov = markers.gov;}
      else{gov = [];}
      //var nums = num1.concat(num2, num3);
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(gov_tog== pushed){gov_tog = not_pushed;}
      else{gov_tog = pushed;}
    };
    toggleStatus_Parking() {
      if(parking.length == 0){parking = markers.parking;}
      else{parking = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(parking_tog == pushed){parking_tog = not_pushed;}
      else{parking_tog = pushed;}
    };
    toggleStatus_Art() {
      if(art.length == 0){art = markers.art;}
      else{art = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(art_tog == pushed){art_tog = not_pushed;}
      else{art_tog = pushed;}
    };
    toggleStatus_Parks() {
      if(parks.length == 0){parks = markers.parks;}
      else{parks = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(parking_tog == pushed){parking_tog = not_pushed;}
      else{parking_tog = pushed;}
    };
    toggleStatus_Retail() {
      if(retail.length == 0){retail = markers.retail;}
      else{retail = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(retail_tog == pushed){retail_tog = not_pushed;}
      else{retail_tog = pushed;}
    };
    toggleStatus_History() {
      if(history.length == 0){history = markers.history;}
      else{history = [];}
      marker = gov.concat(food,parking,gov,art,parks,retail,history,tours,bath);
      this.setState({ marker: this.marker })
      if(his_tog == pushed){his_tog = not_pushed;}
      else{his_tog = pushed;}
    };
  
}