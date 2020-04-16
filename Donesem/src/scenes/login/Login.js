import React from 'react';
import { EmailInput, Logo } from '../../components/atoms';
import { LoginFooter, LoginHeader} from '../../components/molecules';
import { View, Text } from 'react-native';
import login from '../../styles/loginstyles.js';

const Login = () => (
    <View style={login.login_header}>
        <Logo/>
        <Text style={login.login_text_enter}>Войти</Text>
        <LoginHeader/>
        <EmailInput/>
        <LoginFooter/>
    </View>
);

export default Login;