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
  },
  icon: {
    height: screenH/15,
    width: screenH/15,
    left: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 3,
  },
  image: {
    height: screenH/4,
    width: screenW,
    marginTop: -screenH/15-30,
    zIndex: -1,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export {styles};