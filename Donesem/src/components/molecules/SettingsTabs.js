import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import profile from '../../styles/profilestyles.js';

class SettingsTabs extends Component {

    handleClick = () => {
        this.props.handleFunction();
    }

    handleClick2 = () => {
        this.props.handleFunction4();
    }

    render() {
        return(
            <View style={profile.tabs_container}>
                <View style={profile.tabs_personal_info}>
                    <View style={profile.tabs_person_info_logo}>
                        <Icon name={"perm-identity"} size={24} color="#666666"/>
                    </View>
                    <TouchableOpacity 
                        style={profile.tabs_personal_info_button_container}
                    >
                        <Text style={profile.tabs_personal_info_button_text}>Личная анкета</Text>
                    </TouchableOpacity>
                </View>
                <View style={profile.tabs_personal_info}>
                    <View style={profile.tabs_person_info_logo}>
                        <Icon name={"airport-shuttle"} size={24} color="#666666"/>
                    </View>
                    <TouchableOpacity 
                        style={profile.tabs_personal_info_button_container}
                    >
                        <Text style={profile.tabs_personal_info_button_text}>Курьерские службы</Text>
                    </TouchableOpacity>
                </View>
                <View style={profile.tabs_personal_info}>
                    <View style={profile.tabs_person_info_logo}>
                        <Icon name={"credit-card"} size={24} color="#666666"/>
                    </View>
                    <TouchableOpacity 
                        style={profile.tabs_personal_info_button_container}
                        onPress={this.handleClick2}
                    >
                        <Text style={profile.tabs_personal_info_button_text}>Платежная информация</Text>
                    </TouchableOpacity>
                </View>
                <View style={profile.tabs_personal_info}>
                    <View style={profile.tabs_person_info_logo}>
                        <Icon name={"settings"} size={24} color="#666666"/>
                    </View>
                    <TouchableOpacity 
                        style={profile.tabs_personal_info_button_container}
                    >
                        <Text style={profile.tabs_personal_info_button_text}>Настройки</Text>
                    </TouchableOpacity>
                </View>
                <View style={profile.tabs_personal_info}>
                    <TouchableOpacity 
                        style={profile.tabs_personal_info_button_container}
                        onPress={this.handleClick}
                    >
                        <View style={profile.tabs_person_info_logo}>
                            <Icon name={"list"} size={24} color="#666666"/>
                        </View>
                        <Text style={profile.tabs_personal_info_button_text_ind}>Просмотр заказов</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SettingsTabs;