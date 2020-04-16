import React from 'react';
import Login from './src/scenes/login';
import { View } from 'react-native';
import app from './src/styles/appstyles.js';

const App = () => ( 
  <View style={app.container}>
    <Login/>
  </View>
);

export default App;
