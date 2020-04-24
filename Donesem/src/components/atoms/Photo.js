import React from 'react';
import { TouchableOpacity } from 'react-native';
import profile from '../../styles/profilestyles.js';
import { Icon } from 'react-native-elements';

const Photo = () => (
    <TouchableOpacity style={profile.profile_button_container}>
        <Icon name={"insert-emoticon"}  size={30} color="#666666" />
    </TouchableOpacity>
);

export default Photo;