import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import profiledemo from '../../styles/profiledemostyles.js';

class InnInputFooter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({
            isModalVisible: visible
        })
    }

    render() {
        return(
            <View>
                <View style={profiledemo.footer_container}>
                    <TouchableOpacity
                        style={profiledemo.footer_text_button}
                        onPress={() => this.setModalVisible(true)}
                    >
                        <Text style={profiledemo.footer_text}>Если я не самозанятый?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={profiledemo.footer_button}
                    >
                        <Text style={profiledemo.footer_button_text}>Войти</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.isModalVisible}
                    >
                        <View style={profiledemo.footer_description_container}>
                            <Text>Зарегистрироваться в "Мой Налог"!</Text>
                            <TouchableOpacity
                                style={profiledemo.description_button}
                                onPress={() => this.setModalVisible(false)}
                            >
                                <Text style={profiledemo.footer_button_text}>Понятно</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}

export default InnInputFooter;