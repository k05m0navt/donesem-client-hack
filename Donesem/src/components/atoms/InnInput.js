import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import profiledemo from '../../styles/profiledemostyles.js';

class InnInput extends Component {

    handleSubmit = () => {
        this.props.handleFunction();
    }

    render() {
        return(
            <View style={profiledemo.input_container}>
                <TextInput
                    placeholder="Введите ваш ИНН"
                    style={profiledemo.input_style}
                />
            </View>
        );
    }
}

export default InnInput;