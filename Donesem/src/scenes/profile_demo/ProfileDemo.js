import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: JSON.stringify(this.props.navigation.getParam('phone', '')),
                password: JSON.stringify(this.props.navigation.getParam('password', '')),
                inn: ''
            }
        }
    }
    
    handleFunction = () => {
        this.props.navigation.navigate('Main', {
            phone: this.state.user,
            password: this.state.user.password,
            inn: this.state.user.inn
        });
    }

    render() {
        return(
            <View>
                <ProfileDemoHeader/>
                <InnInputFooter handleFunction={this.handleFunction}/>
            </View>
        );
    }
}

export default ProfileDemo;