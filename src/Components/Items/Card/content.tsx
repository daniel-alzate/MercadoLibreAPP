import React from 'react'
import { TouchableOpacity, Image, View, Text, } from 'react-native'
import styles from './style'
import { ItemCardProps } from './interface'

export default ({title = "", thumbnail = "", price = 0, installments={}, onSelectItem }: ItemCardProps) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectItem()}
      activeOpacity={0.5}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.boldFont}>
            {price}
          </Text>
          <Text>{`en ${installments.quantity}x $ ${installments.amount}`}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}