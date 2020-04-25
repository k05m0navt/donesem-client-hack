import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import form from '../../styles/applicationformstyle';


class RegistationInput extends Component {
    render() {
        return(
            <View style={form.passport_container}>
                <View style={form.personal_info_container}>
                    <Text style={form.passport_passport}>Свидетельство о регистрации ТС</Text>
                    <Text style={form.personal_info_text}>Серия</Text>
                    <TextInput
                        placeholder="Введите серию"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Номер</Text>
                    <TextInput
                        placeholder="Введите номер"
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

export default RegistationInput;