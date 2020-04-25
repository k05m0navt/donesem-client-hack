import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import form from '../../styles/applicationformstyle';

class CarInput extends Component {
    render() {
        return(
            <View style={form.passport_container}>
                <View style={form.personal_info_container}>
                    <Text style={form.passport_passport}>Сведения об автомобиле</Text>
                    <Text style={form.personal_info_text}>Марка</Text>
                    <TextInput
                        placeholder="Введите марку автомобиля"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Модель</Text>
                    <TextInput
                        placeholder="Введите модель"
                        placeholderTextColor="#666666"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#BFBFBF"
                        }}
                    />
                </View>
                <View style={form.personal_info_container}>
                    <Text style={form.personal_info_text}>Год</Text>
                    <TextInput
                        placeholder="Введите год производства"
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

export default CarInput;