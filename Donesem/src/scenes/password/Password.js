import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../components/atoms';
import PasswordInput from '../../components/atoms/PasswordInput.js';
import { PasswordHeader, PasswordFooter } from '../../components/molecules';
import password from '../../styles/passwordstyles';


class Password extends Component {
    render() {
        return(
            <View style={password.password_header}>
                <Logo/>
                <Text style={password.password_text_enter}>Здравствуйте</Text>
                <PasswordHeader/>
                <PasswordInput/>
                <PasswordFooter/>
            </View>
        );
    }
}

export default Password;