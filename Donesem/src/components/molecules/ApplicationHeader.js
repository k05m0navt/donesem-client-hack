import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import PhotoForm from '../atoms/PhotoForm.js';
import form from '../../styles/applicationformstyle.js';

class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Константин",
                surname: "Константинопольский",
                inn: "3664069397"
            }
        }
    }

    render() {
        return(
            <View style={form.header_container}>
                <View style={form.header_photo_container}>
                    <PhotoForm/>
                </View>
                <View style={form.header_info_container}>
                    <View style={form.header_name_container}>
                        <Text style={form.header_info_text}>Имя</Text>
                        <Text style={form.header_info}>{this.state.user.name} {this.state.user.surname}</Text>
                    </View>
                    <View>
                        <Text style={form.header_info_text}>ИНН</Text>
                        <Text style={form.header_info} >{this.state.user.inn}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProfileInfo;