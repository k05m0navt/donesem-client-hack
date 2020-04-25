 
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../../scenes/profile/Profile.js';
import ApplicationForm from '../../scenes/application_form/ApplicationForm.js';
import OrdersStack from '../orders_stack/OrdersStack.js';

class ProfileStack extends Component {
    render() {
        return(
            <ProfileStackContainer/>
        );
    }
}

const ProfileStackNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerTitle: "Profile",
            headerLeft: () => null
        }
    },
    ApplicationForm: {
        screen: ApplicationForm,
        navigationOptions: {
            headerTitle: "Личная анкета"
        }
    },
    OrdersStack: {
        screen: OrdersStack,
        navigationOptions: {
            headerShown: false
        }
    }
},
{
    initialRouteName: "Profile"
});

const ProfileStackContainer = createAppContainer(ProfileStackNavigator);

export default ProfileStack;