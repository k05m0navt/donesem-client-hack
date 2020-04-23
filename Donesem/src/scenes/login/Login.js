import React, { Component } from 'react';
import { EmailInput, Logo } from '../../components/atoms';
import { LoginFooter, LoginHeader} from '../../components/molecules';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import login from '../../styles/loginstyles.js';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    handleFunction = () => {
        this.props.navigation.navigate('Password');
    }
    
    render() {
        return(
            <View style={login.login_header}>
                <Logo/>
                <Text style={login.login_text_enter}>Войти</Text>
                <LoginHeader/>
                <EmailInput setPhone={this.setPhone}/>
                <LoginFooter handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default Login;