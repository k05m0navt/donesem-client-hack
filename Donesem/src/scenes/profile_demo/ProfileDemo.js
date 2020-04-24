import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: this.props.navigation.getParam('phone', ''),
            password: this.props.navigation.getParam('password', ''),
            is_tax_payer: this.props.navigation.getParam('is_tax_payer', ''),
            inn: ''
        }
    }

    setInn = (inn) => {
        this.setState({ inn: inn });
    }
    
    handleFunction = () => {
        if (this.state.is_tax_payer) {
            this.props.navigation.navigate('Main', {
                phone: this.state.phone,
                password: this.state.password,
                inn: this.state.inn
            });
            console.log(this.state.inn);
        }
        else {
            this.props.navigation.navigate('ProfileDemo', {
                phone: this.state.phone,
                password: this.state.password,
                inn: this.state.inn
            });
            console.log(this.state.inn);
        }
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