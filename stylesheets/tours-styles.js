// Stylesheet for tours.js

import Dimensions from 'Dimensions';
import {
  StyleSheet,
} from 'react-native'

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

export default tourStyles = StyleSheet.create ({
  
  activeTourLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  
  activeTourTitle: {
    fontSize: 16,
  },
  
  bodyContainer: {
    backgroundColor:'#aadaff',
    borderColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
    height: screenH/8 * 6,
  },
  
  buildButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderRadius: 20,
    margin: screenW/4,
  },
  
  buttonContainer: {
    backgroundColor: '#75a9f9',
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
  
  fullScreen: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#75a9f9',
  },

  float: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 20,
    left: 20,
  },
  
  goToButton: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    borderRadius: 10,
  },
  
  headerContainer: {
    backgroundColor: '#75a9f9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    margin: 20,
  },
  
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15,
    flex: .8,
    flexDirection: 'column',
    marginTop: -50,
    marginHorizontal: 15,
    zIndex: -1,
  },
  
  list: {
    marginTop: 10,
    backgroundColor: "white",
    borderColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
  },
  
  listHeader: {
    borderColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
  },
  
  listHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
    
  locationContainer :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#75a9f9',
  },
  
  parent: {
    flex: 1,
  },
  
  rowButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  
  rowContainer: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center'
  },
  
  tourName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: screenW/2,
    margin: 2,
  },
  
  tourText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  
  });
