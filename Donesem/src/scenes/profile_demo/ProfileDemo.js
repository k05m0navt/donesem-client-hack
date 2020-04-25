import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.getParam('user', {}),
            token: this.props.navigation.getParam('token', ''),
        }
    }

    setInn = (inn) => {
        this.state.user.inn = inn;
    }

    checkInn = () => {
        fetch('https://statusnpd.nalog.ru:443/api/v1/tracker/taxpayer_status', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inn: this.state.user.inn,
                requestDate: '2020-04-24',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            this.updateTaxPayerStatus(data.status);
        })
        .catch((error) => console.log(error));
    }

    updateTaxPayerStatus = (status) => {
        fetch('https://hidden-garden-77483.herokuapp.com/api/accounts/user', {
            method: 'PUT',
            headers: {
                'Authorization': 'Token ' + this.state.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: this.state.user.phone,
                inn: this.state.user.inn,
                is_tax_payer: status,
            }),
        })
        .then((response) => response.json())
        .then((user) => {
            this.props.navigation.navigate('Main', {
                user: user,
                token: this.state.token
            });
        })
        .catch((error) => console.log(error));
    }
    
    handleFunction = () => {
        this.checkInn();
    }

    render() {
        return(
            <View>
                <ProfileDemoHeader/>
                <InnInputFooter handleFunction={this.handleFunction} setInn={this.setInn}/>
            </View>
        );
    }
}

export default ProfileDemo;