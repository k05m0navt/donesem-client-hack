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
            user: {
                phone: this.props.navigation.getParam('phone', ''),
                password: '',
                is_tax_payer: false
            }
        }
    }

    handleFunction = () => {
        console.log(this.state.user.phone);
        this.props.navigation.navigate('ProfileDemo', {
            phone: this.state.user.phone,
            password: this.state.user.password,
            is_tax_payer: this.state.user.is_tax_payer
        });
        console.log(this.state.user.phone)
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