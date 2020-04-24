import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import profiledemo from '../../styles/profiledemostyles.js';

class InnInput extends Component {

    constructor(props) {
        super(props);

        this.state ={
            inn: ''
        };
        this.setInn = this.setInn.bind(this);
    }

    setInn = (inn) => {
        this.setState({
            inn: inn
        },
            () => console.log(this.state)
        );
    }

    render() {
        return(
            <View style={profiledemo.input_container}>
                <TextInput
                    placeholder="Введите ваш ИНН"
                    style={profiledemo.input_style}
                    onChangeText={(inn) => this.setInn(inn)}
                />
            </View>
        );
    }
}

export default InnInput;