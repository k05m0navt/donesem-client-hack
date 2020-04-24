import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: this.props.navigation.getParam('phone', ''),
                password: this.props.navigation.getParam('password', ''),
                is_tax_payer: this.props.navigation.getParam('is_tax_payer', ''),
                inn: ''
            }
        }
    }
    
    handleFunction = () => {
        console.log(this.state.user.phone);
        if (this.state.user.is_tax_payer) {
            this.props.navigation.navigate('Main', {
                phone: this.state.user,
                password: this.state.user.password,
                inn: this.state.user.inn
            });
        }
        else {
            this.props.navigation.navigate('ProfileDemo', {
                phone: this.state.user,
                password: this.state.user.password,
                inn: this.state.user.inn
            });
        }
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