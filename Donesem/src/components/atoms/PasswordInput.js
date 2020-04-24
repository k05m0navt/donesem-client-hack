import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import passwordinput from '../../styles/passwordinputstyles.js';

class PasswordInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.setPassword = this.setPassword.bind(this);
    }

    setPassword = (pass) => {
        this.setState({
            password: pass
        },
            () => console.log(this.state)
        );
    }

    render() {
        return(
            <View style={passwordinput.password_container}>
                <TextInput
                    style={passwordinput.password_input}
                    secureTextEntry
                    placeholder="Введите пароль"
                    onChangeText={(pass) => this.setPassword(pass)}
                />
            </View>
        );
    }
}

export default PasswordInput;