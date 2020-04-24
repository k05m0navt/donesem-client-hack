import React, { Component } from 'react';
import { View } from 'react-native';
import { NextButton, SignUpButton } from '../atoms';
import login from '../../styles/loginstyles.js';

class LoginFooter extends Component {

    handleFunction = () => {
        this.props.handleFunction();
    } 

    render() {
        return(
            <View style={login.login_footer}>
                <SignUpButton/>
                <NextButton handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default LoginFooter;