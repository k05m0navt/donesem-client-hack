import React, { Component } from 'react';
import Login from './src/scenes/login/Login.js';
import { View } from 'react-native';
import appstyles from './src/styles/appstyles.js';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Password from './src/scenes/password/Password.js';

class App extends Component {
  render() {
    return(
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Password: {
    screen: Password,
    navigationOptions: {
      headerShown: false
    }
  }
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
