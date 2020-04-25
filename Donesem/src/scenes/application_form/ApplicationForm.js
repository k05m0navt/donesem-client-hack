import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ApplicationHeader from '../../components/molecules/ApplicationHeader.js';
import MainPersonalInput from '../../components/atoms/MainPersonalInput.js';
import PassportInput from '../../components/atoms/PassportInput.js';
import RegistrationInput from '../../components/atoms/RegistrationInput.js';
import CarInput from '../../components/atoms/CarInput.js';
import AcceptButton from '../../components/atoms/AcceptButton.js';

class ApplicationForm extends Component {

    constructor(props) {false
        super(props);
    }

    handleFunction = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
        return(
                <View>
                    <ScrollView>
                        <ApplicationHeader/>
                        <MainPersonalInput/>
                        <PassportInput/>
                        <RegistrationInput/>
                        <CarInput/>
                        <AcceptButton handleFunction={this.handleFunction}/>
                    </ScrollView>
                </View>
        );
    }
}

export default ApplicationForm;