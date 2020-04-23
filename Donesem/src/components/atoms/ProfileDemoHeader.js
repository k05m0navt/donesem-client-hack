import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import profiledemo from '../../styles/profiledemostyles.js';

class ProfileDemoHeader extends Component {
    render() {
        return(
            <View style={profiledemo.header_container}>
                <Text style={profiledemo.header_bold_text}>Вы являетесь самозанятым?</Text>
                <View style={profiledemo.header_footer_container}>
                    <Text style={profiledemo.header_footer_text}>Введите ваш</Text>
                    <TouchableOpacity
                        style={profiledemo.header_button}
                    >
                        <Text style={profiledemo.header_button_text}>ИНН</Text>
                    </TouchableOpacity>
                    <Text style={profiledemo.header_footer_text}>, чтобы проверить ваш</Text>
                </View>
                <Text style={profiledemo.header_footer_text}>юридический статус как работника</Text>
            </View>
        );
    }
}

export default ProfileDemoHeader;