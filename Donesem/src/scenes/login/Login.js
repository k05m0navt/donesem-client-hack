import React, { Component } from 'react';
import { PhoneInput, Logo } from '../../components/atoms';
import { LoginFooter, LoginHeader} from '../../components/molecules';
import { View, Text } from 'react-native';
import login from '../../styles/loginstyles.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: '+79267942415'
            }
        }
    }

    handleFunction = () => {
        this.props.navigation.navigate('Password', {
            phone: this.state.user.phone
        });
        console.log(this.state.user.phone)
    }
    
    render() {
        return(
            <View style={login.login_header}>
                <Logo/>
                <Text style={login.login_text_enter}>Войти</Text>
                <LoginHeader/>
                <PhoneInput setPhone={this.setPhone}/>
                <LoginFooter handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default Login;