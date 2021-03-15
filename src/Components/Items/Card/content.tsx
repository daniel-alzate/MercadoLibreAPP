import React from 'react'
import { TouchableOpacity, Image, View, Text, } from 'react-native'
import styles from './style'
import { ItemCardProps } from './interface'
import Util from './../../../Util'

export default ({title = "", thumbnail = "", price = 0, installments={}, onSelectItem }: ItemCardProps) => {
  const { quantity = 0, amount = 0 } = { ...installments }

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectItem()}
      activeOpacity={0.5}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.boldFont}>
            {Util.currencyFormat(price)}
          </Text>
          <Text>{`en ${quantity}x $ ${amount}`}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}