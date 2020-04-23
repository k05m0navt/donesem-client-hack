import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import password from '../../styles/passwordstyles.js';

class EnterButton extends Component {
    render() {
        return(
            <TouchableOpacity style={password.password_enter_container}>
                <Text style={password.password_enter_text}>Войти</Text>
            </TouchableOpacity>
        );
    }
}

export default EnterButton;