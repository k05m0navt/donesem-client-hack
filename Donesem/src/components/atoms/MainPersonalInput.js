import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';
import form from '../../styles/applicationformstyle';

class MainPersonalInfo extends Component {
    render() {
        return(
            <View style={form.personal_container}>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Телефон</Text>
                    <TextInput 
                        placeholder="Введите телефон"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Эл. почта</Text>
                    <TextInput
                        placeholder="Введите эл. почту"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Город</Text>
                    <TextInput
                        placeholder="Введите город проживания"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default MainPersonalInfo;