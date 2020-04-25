import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import form from '../../styles/applicationformstyle.js';

const PhotoForm = () => (
    <TouchableOpacity style={form.header_button_container}>
        <Icon name={"insert-emoticon"}  size={30} color="#666666" />
    </TouchableOpacity>
);

export default PhotoForm;