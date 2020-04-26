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
        borderColor: "#BDBDBD",
    },
    order_name: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#000000",
        marginBottom: "1.5%"
    },
    order_params: {
        flexDirection: "row"
    },
    param: {
        marginRight: "10%"
    },
    company_name: {
        color: "#219653",
        marginBottom: "1.5%"
    },
    titles_text: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BDBDBD",
        marginBottom: "1.6%"
    },
    order_text: {
        color: "#212121",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.25,
        marginBottom: "1.3%"
    },
    modal_content_container: {
        flex: 1
    },
    order_button: {
        backgroundColor: "white",
        marginTop: "5%"
    },
    order_button_text_header: {
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.1,
        color: "#000000",
        marginLeft: "5%"
    },
    header_text: {
        flexDirection: "row",
    },
    company_name2: {
        color: "#219653",
        marginBottom: "1.5%",
        marginLeft: "5%"
    },
    titles_text2: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: 0.4,
        color: "#BDBDBD",
        marginTop: "1.3%",
        marginLeft: "40%"
    },
    order_params2: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "5%"
    },
    body_container: {
        paddingLeft: '5%',
        paddingVertical: "3%",
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2
    },
    start_container: {
        alignItems: "center",
        backgroundColor: "#472FAA",
        marginTop: "5%",
        marginHorizontal: "10%",
        borderRadius: 4,
        paddingVertical: "3%",
        paddingHorizontal: "10%"
    },
    start_text: {
        fontSize: 14,
        lineHeight: 16,
        color: "#FFFFFF"
    },
});

export default feed;