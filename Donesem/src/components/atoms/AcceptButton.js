import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import form from '../../styles/applicationformstyle.js';

class AcceptButton extends Component {
    
    handleClick = () => {
        this.props.handleFunction();
    }

    render() {
        return(
            <View>
                <TouchableOpacity
                style={form.button_container}
                onPress={this.handleClick}
                >
                    <Text style={form.button_text}>Подтвердить</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AcceptButton;