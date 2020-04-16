import React from 'react';
import { View, TextInput, Text } from 'react-native';
import email from '../../styles/emailstyles.js';

const EmailInput = () => (
    <View style={email.login_container}>
        <TextInput
            style={email.login_input}
            placeholder="Адрес эл. почты"
        />
    </View>
);

export default EmailInput;