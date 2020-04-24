import { StyleSheet } from 'react-native';

const profiledemo = StyleSheet.create({
    header_container: {
        marginLeft: "5%",
        marginTop: "7%"
    },
    header_bold_text: {
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontStyle: "normal",
        color: "#333333"
    },
    header_footer_container: {
        flexDirection: "row",
        marginTop: "3%"
    },
    header_footer_text: {
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25
    },
    header_button: {
        paddingLeft: "1%"
    },
    header_button_text: {
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25,
        color: "#2F80ED"
    },
    input_container: {
        justifyContent: 'center',
        margin: "5%",
        marginTop: "3%"
    },
    input_style: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#BCBCBC',
        borderRadius: 4,
        height: 56,
        paddingLeft: 20
    },
    footer_container: {
        flexDirection: "row"
    },
    footer_text_button: {
        marginLeft: "5%",
        marginTop: "5%"
    },
    footer_text: {
        fontSize: 12,
        lineHeight: 14,
        color: "#2F80ED"
    },
    footer_button_text: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 16,
        textAlign: "center",
        color: "#FFFFFF"
    },
    footer_button: {
        alignItems: "center",
        backgroundColor: "#2F80ED",
        marginTop: "1.5%",
        marginLeft: "20%",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "10%"
    },
    footer_description_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    description_button: {
        alignItems: "center",
        backgroundColor: "#2F80ED",
        marginTop: "3%",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "10%"
    }
});

export default profiledemo;