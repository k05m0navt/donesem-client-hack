import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Orders extends Component {
    render() {
        return(
            <View style={{
                alignItems:"center",
                marginTop: "80%"
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: "bold"
                }}>Orders</Text>
            </View>
        );
    }
}

export default Orders;