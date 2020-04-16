import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import login from '../../styles/loginstyles.js';
const NextButton = () => (
    <TouchableOpacity style={login.login_next_container}>
        <Text style={login.login_next_text}>Далее</Text>
    </TouchableOpacity>
);

export default NextButton;