import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import login from '../../styles/loginstyles.js';

const SignUpButton = () => (
    <TouchableOpacity style={login.login_signup_container}>
        <Text style={login.login_signup_text}>Зарегистрироваться</Text>
    </TouchableOpacity>
);

export default SignUpButton;