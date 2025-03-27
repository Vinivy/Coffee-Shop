import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    nav: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
        justifyContent: 'space-between',
        alignContent: 'center',
    },

    navList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },

    navItem: {
        alignItems: 'center',
        padding: 10,
    },

    Marrom: {
        color: '#422110',
    },
    
    text: {
        color: '#000',
    },

    selectedText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },

    content: {
        marginTop: 20,
        alignItems: 'center',
    },

    
});