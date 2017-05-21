//map stylesheet
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
var {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map_container: {
    //height: height,
    //width: width,
  },
  MapView: {
    flex: 1,
    height: height*2,
    width: width,
    marginTop: -height/5,
  },
  buttons: {
    //marginTop: -650,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: -(height-20),
    marginBottom: (height/2),
    marginRight: 330,
    //marginRight: width-(width/3),
    marginLeft: 15,
    //marginRight: (width/2)+(width/3),
  },
  icon: {
    //alignItems: 'flex-start',
    //height: 40,
    height: height/17,
    width: height/17,
    //width: 40,
    //marginBottom: 10,
  },
  icon_container: {
    borderColor: 'black',
  //  //flex: 1,
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 3,
  },
});

export {styles};