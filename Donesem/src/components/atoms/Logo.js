import React from 'react';
import { View, Image } from 'react-native';
import login from '../../styles/loginstyles.js';

const Logo = () => (
    <View style={login.login_logo_container}>
        <Image
            style={login.login_logo_image}
            source={require('../../assets/donesem.png')}
        />
    </View>
);

export default Logo;