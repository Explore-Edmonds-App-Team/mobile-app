// Stylesheet for scavenger.js, visitedLocations.js, and location.js

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  address : {
    fontWeight: 'bold'
  },
  button: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#75a9f9',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    marginHorizontal: 15,
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  centerText : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  creator : {
    marginTop: 5,
   fontWeight: 'bold' 
  },
  description : {
    marginTop: 15
  },
  evenBackground: {
    backgroundColor: '#f7f7f7',
  },
  greenButton : {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    marginHorizontal: 15,
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  homeRow: {
    flex: 0.160,
    flexDirection: 'column',
    justifyContent:'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    height: screenH/15,
    width: screenH/15,
    left: 10,
    marginTop: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 3,
  },
  image : {
    width: screenW - 60, 
    height : 365,
    marginHorizontal: 10,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    padding: 5,
    paddingTop: 15,
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
    marginHorizontal: 15,
  },
  instructContainer: {
    margin: 15,
  },
  instructImage: {
    width: (screenW - 30),
    marginTop: 10,
    marginBottom: 10,
  },
  locationButton: {
    backgroundColor: 'rgba(117,169,249, 0.7)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    margin: 15,
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  locationContainer :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  refreshButton : {
    backgroundColor: '#f1c232',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    marginHorizontal: 15,
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  rowContainer: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  visitedAddress: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export {styles};