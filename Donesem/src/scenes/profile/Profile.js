import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileHeader from '../../components/molecules/ProfileHeader.js';
import ProfileInfo from '../../components/molecules/ProfileInfo.js';
import SettingsTabs from '../../components/molecules/SettingsTabs.js';
import profile from '../../styles/profilestyles.js';
import { ScrollView } from 'react-native-gesture-handler';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.getParam('user', {}),
            token: this.props.navigation.getParam('token', ''),
            is_form_complete: false
        }
    }

    handleFunction = () => {
        this.setState({
            is_form_complete: true
        });
        this.props.navigation.navigate('ApplicationForm');
    }

    handleFunction2 = () => {
        this.props.navigation.navigate('OrdersStack');
    }

    render() {
        const prof_head = <View style={profile.profile_container}><ProfileHeader handleFunction={this.handleFunction} is_form_complete={this.state.is_form_complete}/><ProfileInfo phone={this.state.user.phone}/><SettingsTabs/></View>;
        const prof = <View style={profile.profile_container}><ProfileInfo phone={this.state.user.phone}/><SettingsTabs handleFunction={this.handleFunction2}/></View>;
        let ren_prof;

        console.log(this.state.is_form_complete)

        if(this.state.is_form_complete) {
            ren_prof = prof;
        }
        else {
            ren_prof = prof_head;
        }
        return(
            <View>
                <ScrollView>
                    {ren_prof}
                </ScrollView>
            </View>
        );
    }
}

export default Profile;