// Stylesheet for header.js

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    backgroundColor: '#75a9f9',
    //flex: 1,
    //flexDirection: 'row',
    //alignItems:'center',
    //justifyContent:'center'
  },
  backButton: {
    height: 50,
    width: 50,
    left: 10,
  },
  image: {
    height: screenH/4,
    width: screenW,
    marginTop: -80,
    zIndex: -1,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    //marginRight: screenW/4,
    //marginLeft: screenW/4,
    textAlign: 'center'
  }
});

export {styles};