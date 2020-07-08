import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        width: '80%',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
    },
    noAccountButton: {
        alignSelf: 'center',
        bottom: 20,
        padding: 10,
    },
    noAccountText: {
        color: 'white',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
});

export default styles;
