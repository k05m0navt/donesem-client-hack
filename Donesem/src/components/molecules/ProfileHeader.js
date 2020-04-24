import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import profile from '../../styles/profilestyles.js';

class ProfileHeader extends Component {
    render() {
        return(
            <View style={profile.header_container}>
                <View style={profile.header_text_container}>
                    <Text style={profile.header_text}>Для начала работы вам необходимо заполнить</Text>
                    <Text style={profile.header_text}>анкету для рассмотрения курьерьской службой</Text>
                </View>
                <TouchableOpacity
                    style={profile.header_button_container}
                >
                    <Text style={profile.header_button_text}>Заполнить анкету</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ProfileHeader;