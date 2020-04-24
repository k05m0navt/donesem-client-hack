import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {
    
    handleFunction = () => {
        this.props.navigation.navigate('ProfileDemo');
    }

    render() {
        return(
            <View>
                <ProfileDemoHeader/>
                <InnInputFooter/>
            </View>
        );
    }
}

export default ProfileDemo;