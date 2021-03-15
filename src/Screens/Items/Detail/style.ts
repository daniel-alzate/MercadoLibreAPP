import { Colors } from '../../../Config/constants'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    infoContainer: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '400',
        marginBottom:12,
        color: Colors.grey700
    },
    imagesContainer: {
        marginVertical: 16
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },

    priceContainer: {
        marginVertical: 16,
        paddingLeft: 16,
    },

    price: {
        fontSize: 36,
        fontWeight: "normal"
    },
    sectionContainer: {
        minHeight:100,
        borderTopWidth: 2,
        borderTopColor: Colors.grey200,
        paddingVertical: 40,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 20
    },

    locationContainer: {
        flexDirection: 'column'
    },
    location: {
        fontSize: 12,
        color: Colors.grey900
    },
    icon: {
        marginHorizontal: 5,
        bottom: 2
    },
})