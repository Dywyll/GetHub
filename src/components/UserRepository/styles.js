import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: '100%',
        marginTop: 20,
        backgroundColor: 'orange',
        borderRadius: 20,
        flexWrap: 'wrap',
    },
    repoTitle: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    itemCount: {
        marginRight: 5,
        fontSize: 18,
        paddingLeft: 2,
        paddingRight: 2,
    },
    textView: {
        alignItems: 'center',
    },
    textDescription: {
        textAlign: 'center',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default styles;
