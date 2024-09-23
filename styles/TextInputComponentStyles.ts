import { StyleSheet } from 'react-native';

const TextInputComponentStyles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'black',
        padding: 5,
    },
    error: {
        color: 'red',
        fontSize: 15,
        width: '80%',
        marginTop: 5,
    },
});

export default TextInputComponentStyles;