import { Colors } from '../../../Config/constants'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.grey200,
        backgroundColor: Colors.white,
        flexDirection: 'row',
    },
    image: {
        width: 140,
        resizeMode: 'contain'

    },
    infoContainer: {
        flex: 0.8,
    },
    name: {
        fontSize: 14,
        color: Colors.grey900
    },
    location: {
        fontSize: 12,
        color: Colors.grey900
    },
    priceDescription: {
        fontSize: 14,
        color: Colors.grey700,
        alignItems: "center"
    },
    priceContainer: {

    },
    boldFont: {
        fontSize: 20,
    }
})