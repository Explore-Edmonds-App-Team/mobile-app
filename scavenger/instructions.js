/*Instruction page for how to interact with the Scavenger Hunt*/

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Dimensions,
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

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default class ScavInstruct extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={main.container}>
        <View style={main.headerContainer}>
          <Header title='Instructions' navigator={this.props.navigator} type='back' hasImage={true}/>
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
        <View style={styles.instructContainer}>
          <Text style={{textAlign: 'center'}}> 
            Welcome to Edmonds!{'\n\n'}
            Scattered throughout the city are various points of cultural and historic interest.
            Some of them are well known, while others are a bit more obscure. {'\n\n'}
            Can you find them all?
          </Text>
          <Image 
            source={require('../media/ScavImages/instructions/map.png')} 
            style={styles.instructImage}
            />
          <Text style={{textAlign: 'center'}}>
            The game is pretty simple. All objectives can be found on your map.
            Green pins mark points that you have discovered, while the red ones are ones you've yet to find. {'\n\n'}
            When you think you've found something, simply press the refresh button on your phone, 
            if you are within 25 meters, the button will change from yellow to green. Press it one more time to unlock it.
          </Text>
          <Image
            source={require('../media/ScavImages/instructions/refresh button.png')} 
            style={styles.instructImage}
            />
          <Image
            source={require('../media/ScavImages/instructions/unlock button.png')} 
            style={styles.instructImage}
            />
          <Text style={{textAlign: 'center'}}>
            When you unlock an objective you'll be rewarded with a page giving you some background information for that objective.
          </Text>
          <Image
            source={require('../media/ScavImages/instructions/reward.png')} 
            style={styles.instructImage}
            />
          <Text style={{textAlign: 'center'}}>
            Note: your phones GPS isn't prefect and sometimes it will think you are further away than you really are. 
            If are standing right next to an objective and the button isn't changing chances are you have either already discovered
            that objective or your phone is placing you in the wrong place. Try walking around a bit and give your phone a chance to
            recalibrate. {'\n\n'}
            Happy Hunting!
          </Text>
        </View>
      </ScrollView>
    );
  }
}