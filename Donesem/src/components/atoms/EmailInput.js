import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import email from '../../styles/emailstyles.js';

class EmailInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
        };
    }

    render() {
        return(
            <View style={email.login_container}>
                <TextInput
                    style={email.login_input}
                    placeholder="Номер телефона"
                />
            </View>
        );
    }
}

export default EmailInput;