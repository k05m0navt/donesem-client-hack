import { StyleSheet } from 'react-native';

const form = StyleSheet.create({
    header_container: {
        flexDirection: "row"
    },
    header_info_container: {
        
    },
    header_info_text: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BFBFBF"
    },
    header_info: {
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25,
        color: "#373737"
    },
    header_name_container: {
        marginVertical: "6%"
    },
    header_inn_container: {
        
    },
    header_button_container: {
        marginLeft: "12%",
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width: 56,
        height: 56,
        backgroundColor: '#BFBFBF',
        borderRadius:50
    },
    header_photo_container: {
        marginTop: "7%"
    },
    personal_container: {
        marginTop: "12%"
    },
    personal_info_container: {
        marginBottom: "5%",
        marginHorizontal: "5%"
    },
    personal_info_text: {
        color: "#BFBFBF"
    },
    passport_container: {
        marginTop: "7%"
    },
    passport_passport: {
        color: "#1D1B91",
        marginBottom: "2%"
    },
    button_container: {
        alignItems: "center",
        backgroundColor: "#1D1B91",
        borderRadius: 4,
    },
    button_text: {
        fontSize: 14,
        lineHeight: 16,
        color: "#FFFFFF"
    }
});

export default form;