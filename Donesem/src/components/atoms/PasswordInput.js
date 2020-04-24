import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import passwordinput from '../../styles/passwordinputstyles.js';

class PasswordInput extends Component {

    constructor(props) {
        super(props);
    }

    setPassword = (password) => {
        this.props.setPassword(password);
    }

    render() {
        return(
            <View style={passwordinput.password_container}>
                <TextInput
                    style={passwordinput.password_input}
                    secureTextEntry
                    placeholder="Введите пароль"
                    onChangeText={(password) => this.setPassword(password)}
                />
            </View>
        );
    }
}

export default PasswordInput;