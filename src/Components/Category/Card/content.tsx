import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { CategoryCardProps } from './interface'

export default ({ name = "", onSelectCategory = () => { } }: CategoryCardProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelectCategory()}
            activeOpacity={0.5}>
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}