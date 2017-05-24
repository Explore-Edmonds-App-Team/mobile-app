//map stylesheet
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
var {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MapView: {
    height: height,
    width: width,
  },
  buttons: {
    marginTop: (-(height) + 30),
    left: 5,
    width: height/15 + 9,
  },
  icon: {
    height: height/15,
    width: height/15,
    margin: 3,
  },
  icon_container: {
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export {styles};
