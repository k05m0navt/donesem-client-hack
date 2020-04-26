import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import feed from '../../styles/ordersfeedstyles.js';
import profiledemo from '../../styles/profiledemostyles.js';
import PhotoForm from '../atoms/PhotoForm.js';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            order_name: this.props.order_name,
            company: this.props.company,
            picked_up_adress: this.props.pick_up_adress,
            delivery_adress: this.props.delivery_adress,
            picked_up_time: this.props.pick_up_time,
            delivery_time: this.props.delivery_time,
            weight: this.props.weight,
            size: this.props.size,
            compensation: this.props.compensation,
            created_date: this.props.created_date,
            isModalVisible: false
        }
    }

    setModalVisible = (state) => {
        this.props.setModalVisible(state);
    }

    changeStatus = () => {
        if (this.state.status == "open") {
            this.setState({ status: "close" });
        }
        else {
            this.setState({ status: "open" });
        }
    }

    render() {
        return(
            <View style={feed.order_container}>
                <TouchableOpacity
                    onPress={() => this.setModalVisible(true)}
                >
                    <View>
                        <View>
                            <View>
                                <Text style={feed.order_name}>{this.state.order_name}</Text>
                                <Text style={feed.company_name}>{this.state.company}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={feed.titles_text}>Забрать</Text>
                            <Text style={feed.order_text}>{this.state.picked_up_adress}</Text>
                            <Text style={feed.order_text}>{this.state.picked_up_time}</Text>
                        </View>
                        <View>
                            <Text style={feed.titles_text}>Доставить</Text>
                            <Text style={feed.order_text}>{this.state.delivery_adress}</Text>
                            <Text style={feed.order_text}>{this.state.delivery_time}</Text>
                        </View>
                        <View style={feed.order_params}>
                            <View style={feed.param}>
                                <Text style={feed.titles_text}>Масса</Text>
                                <Text style={feed.order_text}>{this.state.weight} кг</Text>
                            </View>
                            <View style={feed.param}>
                                <Text style={feed.titles_text}>Габариты</Text>
                                <Text style={feed.order_text}>{this.state.size} см</Text>
                            </View>
                            <View style={feed.param}>
                                <Text style={feed.titles_text}>Стоимость</Text>
                                <Text>{this.state.compensation} Р</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={this.changeStatus}
                    >
                        <Icon name={this.state.status == "open" ?  "add-circle-outline" : "highlight-off"} size={30} color={"#472FAA"}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Order;