import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../components/atoms';
import PasswordInput from '../../components/atoms/PasswordInput.js';
import { PasswordHeader, PasswordFooter } from '../../components/molecules';
import password from '../../styles/passwordstyles';


class Password extends Component {
    constructor(props) {
        super(props);
    }

    handleFunction = () => {
        this.props.navigation.navigate('ProfileDemo');
    } 

    render() {
        return(
            <View style={password.password_header}>
                <Logo/>
                <Text style={password.password_text_enter}>Здравствуйте</Text>
                <PasswordHeader/>
                <PasswordInput/>
                <PasswordFooter handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default Password;