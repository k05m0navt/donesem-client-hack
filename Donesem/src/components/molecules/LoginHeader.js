import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import login from '../../styles/loginstyles.js';

const LoginHeader = () => (
    <View style={login.login_forgot_mail_container}>
        <Text style={login.login_text}>Используйте эл. почту.</Text>
        <TouchableOpacity>
            <Text style={login.login_text_forgot_mail}>Забыли почту?</Text>
        </TouchableOpacity>
    </View>
);

export default LoginHeader;