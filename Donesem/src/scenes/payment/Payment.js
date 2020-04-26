import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import pay from '../../styles/paymentstyles.js';
import { Icon } from 'react-native-elements';

class Payment extends Component {
    render() {
        return(
            <View style={pay.container}>
                <View style={pay.header_container}>
                    <Text style={pay.header_text}>Баланс</Text>
                    <Text style={pay.header_text}>сегодня в  10.26</Text>
                </View>
                <Text style={pay.balance}>4360 ₽</Text>
                <View>
                    <TouchableOpacity
                        style={pay.add_card_button}
                    >
                        <Icon name={"add-circle-outline"} size={30} color={"#472FAA"}/>
                        <Text style={pay.add_card_button_text}>Добавить новую карту</Text>
                    </TouchableOpacity>
                </View>
                <View style={pay.footer_container}>
                    <TouchableOpacity>
                        <Text style={pay.footer_top_text}>Платежная реквизиты</Text>
                        <Text style={pay.footer_bottom_text}>Информация о вашем личном счете и эквайринге</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Payment;