import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
    login_header: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },
    login_text_enter: {
        textAlign: "center",
        lineHeight: 23,
        letterSpacing: 0.15,
        fontWeight: "bold",
        fontSize: 20,
        color: "#333333",
        marginBottom: "3%"
    },
    login_text: {
        paddingLeft: "23.1%",
        fontSize: 14,
        lineHeight: 16,
        textAlign: "center"
    },
    login_forgot_mail_container: {
        flexDirection: "row"
    },
    login_footer: {
        flexDirection: "row"
    },
    login_signup_text: {
        color: "#472FAA",
        fontSize: 12,
        lineHeight: 14
    },
    login_signup_container: {
        alignItems: "center",
        marginLeft: "4.5%",
        marginTop: "30%",
    },
    login_next_container: {
        alignItems: "center",
        backgroundColor: "#472FAA",
        marginTop: "27%",
        marginLeft: "27.5%",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "10%"
    },
    login_next_text: {
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
    }
});

export default login;