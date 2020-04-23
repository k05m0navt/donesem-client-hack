import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import passwordinput from '../../styles/passwordinputstyles.js';

class PasswordInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
    }

    render() {
        return(
            <View style={passwordinput.password_container}>
                <TextInput
                    style={passwordinput.password_input}
                    secureTextEntry
                    placeholder="Введите пароль"
                />
            </View>
        );
    }
}

export default PasswordInput;