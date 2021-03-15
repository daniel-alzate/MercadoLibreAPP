import { Colors } from '../../../Config/constants'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginVertical: 1,
        marginHorizontal: 16,
        paddingLeft:24,
        height: 64,
        flexDirection: 'row',
        alignItems:"center",
    }, 
    icon: {
        marginHorizontal: 16
    },
    name: {
        fontSize: 16,
        color: Colors.grey900
    }
})