import React, { Component } from 'react';
import Login from './src/scenes/login/Login.js';
import ProfileDemo from './src/scenes/profile_demo/ProfileDemo.js';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Password from './src/scenes/password/Password.js';
import Main from './src/scenes/tab_navigation/Main.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        token: ''
      }
    }
  }

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
  },
  ProfileDemo: {
    screen: ProfileDemo,
    navigationOptions: {
      headerTitle: "Profile",
      headerLeft: () => null
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
},{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
