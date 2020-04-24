import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import Profile from '../profile/Profile.js';
import Orders from '../orders/Orders.js';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: JSON.stringify(this.props.navigation.getParam('phone', '')),
                password: JSON.stringify(this.props.navigation.getParam('password', '')),
                inn: JSON.stringify(this.props.navigation.getParam('inn', ''))
            }
        }
    }

    render() {
        return(
            <TabContainer/>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Orders: {
            screen: Orders,
            navigationOptions: {
                tabBarLabel: 'Заказы'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Профиль'
            }
        },
    },
    {
        initialRouteName: 'Profile',
        tabBarOptions: {
            showIcon: false,
            showLabel: true,
            labelStyle: {
                fontSize: 15,
                marginBottom: "6%"
            }
        }
    },
);

TabNavigator.navigationOptions = {
    header: null
};

const TabContainer = createAppContainer(TabNavigator);

export default Main;