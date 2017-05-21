// Stylesheet for home.js

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#75a9f9',
  },
  header : {
    height: screenH/8 * 3,
    width: screenW,
  },
  button: {
    height: screenH/8,
    width: screenW,
  },
  float: {
    position: 'absolute',
    width: 100,
    height: 200,
    top: 200,
    left: 40,
    backgroundColor: '#75a9f9',
  },
});

export {styles};