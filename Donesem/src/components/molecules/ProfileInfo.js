import React, { Component } from 'react';
import { View, Text } from 'react-native';
import profile from '../../styles/profilestyles.js';
import Photo from '../atoms/Photo.js';

class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Сергей",
                surname: "Иванович",
                inn: "3664069397",
                phone: "+7 (926) 794 24 14",
                email: "gubaydullin.dan@gmail.com"
            }
        }
    }

    render() {
        return(
            <View>
                <View style={profile.profile_info_container}>
                    <View style={profile.profile_logo_container}>
                        <Photo/>
                    </View>
                    <View style={profile.profile_info_text_container}>
                        <Text style={profile.profile_info_text}>{this.state.user.name} {this.state.user.surname}</Text>
                        <Text>ИНН {this.state.user.inn}</Text>
                    </View>
                </View>
                <View style={profile.profile_data_container}>
                    <View style={profile.profile_data_phone_container}>
                        <Text style={profile.profile_data_phone_text_name}>Номер телефона</Text>
                        <Text style={profile.profile_data_phone_text}>{this.state.user.phone}</Text>
                    </View>
                    <View style={profile.profile_data_phone_container}>
                        <Text style={profile.profile_data_phone_text_name}>Эл. почта</Text>
                        <Text style={profile.profile_data_phone_text}>{this.state.user.email}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProfileInfo;