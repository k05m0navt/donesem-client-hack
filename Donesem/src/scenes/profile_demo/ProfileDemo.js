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
    
    handleFunction = () => {
        this.props.navigation.navigate('Main', {
            user: this.state.user,
            token: this.state.token
        });
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