import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import Order from '../../components/atoms/Order.js';
import feed from '../../styles/ordersfeedstyles.js';

class Orders extends Component {
    render() {
        return(
            <View style={feed.container}>
                <View style={feed.tabs}>
                    <TouchableOpacity
                        style={feed.main_button_container}
                    >
                        <Text style={feed.main_button_text}>Все заказы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={feed.button_container}
                    >
                        <Text style={feed.button_text}>Сохраненные</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={feed.button_container}
                    >
                        <Text style={feed.button_text}>Выполненные</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data = {[
                            {key: "1", order_name: "Продукты в Выхино", company: "Сбермаркет", pick_up_adress: "Москва, ул. Достоевского, 1", pick_up_time: "18:30-19:00", delivery_adress: "Москва, ул. Некрасова, 2", delivery_time: "до 21:30", compensation: "500", status: "open", weight: "1.4", created_date: "12:43", size: "140x40x36"},
                            {key: "2", order_name: "Букет в Марьино", company: "Dostavista", pick_up_adress: "Москва, ул. Достоевского, 1", pick_up_time: "18:30-19:00", delivery_adress: "Москва, ул. Некрасова, 2", delivery_time: "до 21:30", compensation: "500", status: "close", weight: "1.4", created_date: "12:43", size: "140x40x36"}
                        ]}
                        renderItem={({item}) => <Order
                            order_name={item.order_name}
                            company={item.company}
                            pick_up_adress={item.pick_up_adress}
                            pick_up_time={item.pick_up_time}
                            delivery_adress={item.delivery_adress}
                            delivery_time={item.delivery_time}
                            delivery_adress={item.delivery_adress}
                            compensation={item.compensation}
                            status={item.status}
                            weight={item.weight}
                            created_date={item.created_date}
                            size={item.size}
                            created_date={item.created_date}
                        />
                        }
                    />
                </View>
            </View>
        );
    }
}

export default Orders;