import { StyleSheet } from 'react-native';

const feed = StyleSheet.create({
    container: {
        
    },
    tabs: {
        flexDirection: "row"
    },
    main_button_container: {
        alignItems: "center",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "4.57%",
        borderBottomWidth: 3,
        borderColor: "#472FAA"
    },
    button_container: {
        alignItems: "center",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "4.57%",
    },
    main_button_text: {
        color: "#472FAA",
        fontSize: 14,
        lineHeight: 16
    },
    button_text: {
        color: "#BDBDBD",
        fontSize: 14,
        lineHeight: 16
    },
    order_container: {
        padding: "5%",
        marginVertical: "5%",
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#BDBDBD"
    },
    order_name: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#000000"
    },
    order_params: {
        flexDirection: "row"
    },
    param: {
        marginRight: "10%"
    },
    company_name: {
        color: "#219653"
    },
    titles_text: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BDBDBD"
    },
    order_text: {
        color: "#212121",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25
    }
});

export default feed;