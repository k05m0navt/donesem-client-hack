import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import card_info from '../../styles/cardsinfostyles.js';

class CardsInfo extends Component {
    render() {
        return(
            <View style={card_info.constainer}>
                <View style={card_info.number_text_container}>
                    <Text style={card_info.number_text}>Номер карты</Text>
                </View>
                <View style={card_info.number_input_container}>
                    <TextInput
                        style={card_info.number_input}
                        placeholder='Номер карты'
                    />
                </View>
                <View style={card_info.link_button_container}>
                    <TouchableOpacity
                        style={card_info.link_button_text}
                    >
                        <Text style={}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CardsInfo;