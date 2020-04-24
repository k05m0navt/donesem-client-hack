import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import login from '../../styles/loginstyles.js';

const LoginHeader = () => (
    <View style={login.login_forgot_mail_container}>
        <Text style={login.login_text}>Используйте номер телефона</Text>
    </View>
);

export default LoginHeader;