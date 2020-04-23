import React, { Component } from 'react';
import { View, Text } from 'react-native';
import password from '../../styles/passwordstyles.js';

class PasswordHeader extends Component {
    render() {
        return(
            <View style={password.password_text_head}>
                <Text style={password.password_text_head}>Введите ваш пароль</Text>
            </View>
        );
    }
}

export default PasswordHeader;