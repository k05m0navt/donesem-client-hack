import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import OrdersFeed from '../../scenes/orders_feed/OrdersFeed.js';

class OrdersStack extends Component {
    render() {
        return(
            <OrdersStackContainer/>
        );
    }
}

const OrdersStackNavigator = createStackNavigator({
    OrdersFeed: {
        screen: OrdersFeed,
        navigationOptions: {
            headerTitle: "Все заказы"
        }
    }
},
{
    initialRouteName: "OrdersFeed"
});

const OrdersStackContainer = createAppContainer(OrdersStackNavigator);

export default OrdersStack;