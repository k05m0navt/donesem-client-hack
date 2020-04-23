import React, { Component } from 'react';
import { View } from 'react-native';
import EnterButton from '../atoms/EnterButton.js';
import password from '../../styles/passwordstyles.js';
import ForgotPasswordButton from '../atoms/ForgotPasswordButton';

class PasswordFooter extends Component {
    
    handleFunction = () => {
        this.props.handleFunction();
    }

    render() {
        return(
            <View style={password.password_footer}>
                <ForgotPasswordButton/>
                <EnterButton handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default PasswordFooter;