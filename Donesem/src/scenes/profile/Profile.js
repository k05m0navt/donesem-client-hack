import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileHeader from '../../components/molecules/ProfileHeader.js';
import ProfileInfo from '../../components/molecules/ProfileInfo.js';
import SettingsTabs from '../../components/molecules/SettingsTabs.js';
import profile from '../../styles/profilestyles.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                phone: ''
            }
        }
    }
    render() {
        return(
            <View style={profile.profile_container}>
                <ProfileHeader/>
                <ProfileInfo phone={this.state.user.phone}/>
                <SettingsTabs/>
            </View>
        );
    }
}

export default Profile;