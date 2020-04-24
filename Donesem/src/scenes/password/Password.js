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
        }
    }

    setPassword = (password) => {
        this.setState({ password: password });
    }

    login = () => {
        fetch('https://hidden-garden-77483.herokuapp.com/api/accounts/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: this.state.phone,
                password: this.state.password,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.user.is_tax_payer) {
                this.props.navigation.navigate('Main', {
                    user: data.user,
                    token: data.token
                });
            }
            else {
                this.props.navigation.navigate('ProfileDemo', {
                    user: data.user,
                    token: data.token
                });
            }
        })
        .catch((error) => console.log(error));
    }

    handleFunction = () => {
        this.login();
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