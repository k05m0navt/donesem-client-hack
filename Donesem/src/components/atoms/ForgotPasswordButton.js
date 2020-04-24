import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import password from '../../styles/passwordstyles.js';

const ForgotPasswordButton = () => (
    <TouchableOpacity style={password.password_forgot_container}>
        <Text style={password.password_forgot_text}>Забыли пароль?</Text>
    </TouchableOpacity>
);

export default ForgotPasswordButton;