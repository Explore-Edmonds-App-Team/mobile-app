// Stylesheet for detailedEvents.js

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

var {screenH, screenW} = Dimensions.get('window');

const styles = StyleSheet.create({
 webViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});

export {styles};