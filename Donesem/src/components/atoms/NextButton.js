import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import login from '../../styles/loginstyles.js';

class NextButton extends Component {
    
    handleClick = () => {
        this.props.handleFunction();
    }

    render() {
        return(
            <TouchableOpacity
                style={login.login_next_container}
                onPress={this.handleClick}
            >
                <Text style={login.login_next_text}>Далее</Text>
            </TouchableOpacity>
        );
    }
}

export default NextButton;