import React from 'react';
import { View } from 'react-native';
import EnterButton from '../atoms/EnterButton.js';
import password from '../../styles/passwordstyles.js';
import ForgotPasswordButton from '../atoms/ForgotPasswordButton';

const LoginFooter = () => (
    <View style={password.password_footer}>
        <ForgotPasswordButton/>
        <EnterButton/>
    </View>
);

export default LoginFooter;