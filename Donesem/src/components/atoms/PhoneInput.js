import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import email from '../../styles/emailstyles.js';

class EmailInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        };

        this.setPhone = this.setPhone.bind(this)
    }

    setPhone = (phone) => {
        this.setState({
            phone: phone
        },
            () => console.log(this.state)
        );
    }

    render() {
        return(
            <View style={email.login_container}>
                <TextInput
                    style={email.login_input}
                    placeholder="Номер телефона"
                    onChangeText={(phone) => this.setPhone(phone)}
                />
            </View>
        );
    }
}

export default EmailInput;