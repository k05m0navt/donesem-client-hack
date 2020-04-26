import { StyleSheet } from 'react-native';

const pay = StyleSheet.create({
    container: {
        paddingHorizontal: "4%"
    },
    header_container: {
        flexDirection: "row",
        paddingTop: "10%"
    },
    header_text: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BFBFBF",
        marginRight: "58%",
        paddingBottom: "1%"
    },
    balance: {
        fontSize: 26,
        lineHeight: 20,
        letterSpacing: 0.15,
        fontWeight: "bold",
        color: "#212121",
        paddingTop: "4%"
    },
    add_card_button: {
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: 4,
        paddingVertical: "16%",
        paddingHorizontal: "10%",
        borderWidth: 0.1,
        marginTop: "10%"
    },
    add_card_button_text: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: "#212121",
        marginTop: "5%"
    },
    footer_container: {
        marginVertical: "7%"
    },
    footer_top_text: {
        fontSize: 14,
        lineHeight: 16,
        color: "#212121",
    },
    footer_bottom_text: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.2,
        color: "#BFBFBF",
        marginVertical: "1%"
    }
});

export default pay;