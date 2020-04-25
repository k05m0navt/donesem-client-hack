import React from 'react';
import { StyleSheet } from 'react-native';

const profile = StyleSheet.create({
    profile_container: {
        
    },
    header_container: {
        marginTop: "2%"
    },
    header_text_container: {
        alignItems: "center",
    },
    header_text: {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.25,
        color: "#212121"
    },
    header_button_container: {
        alignItems: "flex-end",
        marginTop: "4%",
        marginRight: "4.4%"
    },
    header_button_text: {
        fontSize: 14,
        lineHeight: 16,
        color: "#1B913C"
    },
    profile_info_container: {
        marginTop: "8%",
        flexDirection: "row",
        marginLeft: "4.1%"
    },
    profile_info_text_container: {
        marginTop: "2.5%"
    },
    profile_info_text: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 20,
        letterSpacing: 0.15,
        color: "#212121"
    },
    profile_button_container: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width: 56,
        height: 56,
        backgroundColor: '#BFBFBF',
        borderRadius:50,
    },
    profile_logo_container: {
        marginRight: "5%",
        marginBottom: "10%"
    },
    profile_data_container: {
        marginLeft: "4.1%"
    },
    profile_data_phone_container: {
        marginBottom: "3%"
    },
    profile_data_phone_text_name: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BFBFBF"
    },
    profile_data_phone_text: {
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25,
        color: "#212121",
        marginTop: "1%"
    },
    tabs_container: {
        marginLeft: "4%",
        marginTop: "10%",
    },
    tabs_personal_info: {
        flexDirection: "row",
        marginBottom: "15%"
    },
    tabs_personal_info_button_text: {
        fontSize: 16,
        lineHeight: 19,
        color: "#212121"
    },
    tabs_personal_info_button_container: {
        flexDirection: "row",
        marginTop: "2%"
    },
    tabs_person_info_logo: {
        paddingRight: "12%"
    },
    tabs_personal_info_button_text_ind: {
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
        paddingLeft: "6%"
    }
});

export default profile;