import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../components/atoms';
import PasswordInput from '../../components/atoms/PasswordInput.js';
import { PasswordHeader, PasswordFooter } from '../../components/molecules';
import password from '../../styles/passwordstyles';


class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: this.props.navigation.getParam('phone', ''),
            password: '',
            is_tax_payer: true
        }
    }

    setPassword = (password) => {
        this.setState({ password: password });
    }

    handleFunction = () => {
        this.props.navigation.navigate('ProfileDemo', {
            phone: this.state.phone,
            password: this.state.password,
            is_tax_payer: this.state.is_tax_payer
        });
        console.log(this.state.phone);
        console.log(this.state.password)
    } 

    render() {
        return(
            <View style={password.password_header}>
                <Logo/>
                <Text style={password.password_text_enter}>Здравствуйте</Text>
                <PasswordHeader/>
                <PasswordInput setPassword={this.setPassword}/>
                <PasswordFooter handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default Password;