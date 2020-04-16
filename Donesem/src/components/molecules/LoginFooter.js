import React from 'react';
import { View } from 'react-native';
import { NextButton, SignUpButton } from '../atoms';
import login from '../../styles/loginstyles.js';

const LoginFooter = () => (
    <View style={login.login_footer}>
        <SignUpButton/>
        <NextButton/>
    </View>
);

export default LoginFooter;