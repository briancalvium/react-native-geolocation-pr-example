/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Geolocation,
  StyleSheet,
  Text,
  View
} from 'react-native';

class geolocationPRExample extends Component {

  constructor(props)
  {
    super(props);

    this.watchID = undefined;

    this.state = {
      location: {},
    };
  }

  componentWillMount()
  {
    this.watchID = navigator.geolocation.watchPosition(
      location => {
        console.log('Updating location', location);
        this.setState({location})
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, distanceFilter: 0},
    );
  }

  componentWillUnmount()
  {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Location Background Test</Text>
        <Text style={styles.instructions}>Location:</Text>
        <Text>{JSON.stringify(this.state.location)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  }
);

AppRegistry.registerComponent('geolocationPRExample', () => geolocationPRExample);
