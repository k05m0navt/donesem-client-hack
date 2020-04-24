import { StyleSheet } from 'react-native';

const password = StyleSheet.create({
    password_header: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },
    password_text_enter: {
        textAlign: "center",
        lineHeight: 23,
        letterSpacing: 0.15,
        fontWeight: "bold",
        fontSize: 20,
        color: "#333333",
        marginBottom: "3%"
    },
    password_text: {
        paddingLeft: "14.7%",
        fontSize: 14,
        lineHeight: 16,
        textAlign: "center"
    },
    login_text_forgot_mail: {
        fontSize: 14,
        lineHeight: 16,
        textAlign: "center",
        paddingLeft: "1%",
        color: "#2F80ED"
    },
    password_footer: {
        flexDirection: "row"
    },
    password_forgot_text: {
        color: "#2F80ED",
        fontSize: 12,
        lineHeight: 14
    },
    password_forgot_container: {
        alignItems: "center",
        marginLeft: "4.5%",
        marginTop: "30%",

    },
    password_enter_container: {
        alignItems: "center",
        backgroundColor: "#2F80ED",
        marginTop: "26%",
        marginLeft: "34%",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "10%"
    },
    password_enter_text: {
        fontSize: 14,
        lineHeight: 16,
        color: "#FFFFFF"
    },
    login_logo_container: {
        alignItems: "center",
        height: "10%"
    },
    login_logo_image: {
        width: "30%",
        height: "30%"
    },
    password_text_head: {
        fontSize: 14,
        lineHeight: 16,
        textAlign: "center",
        color: "#373737"
    }
});

export default password;