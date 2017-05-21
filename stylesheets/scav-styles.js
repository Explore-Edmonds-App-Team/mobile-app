// Stylesheet for scavenger.js, visitedLocations.js, and location.js

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

var {screenH, screenW} = Dimensions.get('window');

const styles = StyleSheet.create({
  address : {
    fontWeight: 'bold'
  },
  backButton: {
    height: 50,
    width: 50,
    left: 10,
    marginTop: 30,
  },
  button: {
    fontWeight: 'bold',
    //color: 'black',
   // margin: 30,
  },
  buttonContainer: {
    flex: .8,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 13,
    padding: 10,
  },
  creator : {
    marginTop: 5,
   fontWeight: 'bold' 
  },
  description : {
    marginTop: 15
  },
  divider : {
    height: 30,
    backgroundColor:'#aadaff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image : {
    width: screenW - 50, 
    height : 300,
  },
infoContainer: {
  //backgroundColor: 'white',
  flex: .8,
  flexDirection: 'column',
  marginTop: -50,
  marginHorizontal: 15,
  zIndex: -1,
},
  input: {
    backgroundColor: 'white',
    height: 40,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    margin: 15,
  },
  locationContainer :{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  row: {
    flex: .125,
    flexDirection: 'column',
    justifyContent:'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
});

export {styles};