import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileDemoHeader from '../../components/atoms/ProfileDemoHeader.js';
import InnInput from '../../components/atoms/InnInput.js';
import InnInputFooter from '../../components/atoms/InnInputFooter.js';

class ProfileDemo extends Component {
    
    handleFunction = () => {
        this.props.navigation.navigate('ProfileDemo');
    }

    render() {
        return(
            <View>
                <ProfileDemoHeader/>
                <InnInput handleFunction={this.handleFunction}/>
                <InnInputFooter/>
            </View>
        );
    }
}

export default ProfileDemo;