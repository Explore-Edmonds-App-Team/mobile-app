/*This contains CSS for the overall theme. You can control:
 * background color / image
 * padding
 */

 import {
   Dimensions,
   StyleSheet,
} from 'react-native';

var {screenH, screenW} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#75a9f9',
  },
  bodyContainer: {
    flex: 0.75,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  headerContainer: {
    flex: 0.25,
    flexDirection: 'column',
  }
});

export {main};