import { StyleSheet } from 'react-native';
import { Colors } from '../../Config/constants'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 17,
        color: Colors.grey900
    },
    ListHeader: {
        marginLeft:16,
        marginTop: 24,
        marginBottom: 16,
        fontSize: 17,
        color: Colors.grey900,
        fontWeight:'bold'
    },
    inputContainer: {
        backgroundColor: Colors.yellow500
    },
    input: {
        paddingLeft:20,
        marginHorizontal:16,
        backgroundColor: Colors.white,
        height: 32,
        paddingVertical: 0,
        marginVertical: 16,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.grey200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})