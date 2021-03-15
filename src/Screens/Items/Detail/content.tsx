import React, { Component } from 'react';
import { getProductDetail, getProductDescription } from '../../../Services'
import Util from './../../../Util'

import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';

import styles from './style'

export default class ItemDetail extends Component<ItemDetailProps, ItemDetailState> {

  constructor(props: ItemDetailProps) {
    super(props)
    this.state = {
      itemDetail: {},
      description: '',
      error: false,
      isLoading: true
    }
  }

  componentDidMount() {
    const { id = "" } = { ...this.props.navigation.state.params }

    getProductDetail(id)
      .then(itemDetail => this.setState({ itemDetail, isLoading: false }))
      .catch(error => { this.setState({ error: true, isLoading: false }) })

    getProductDescription(id).then(description => this.setState({ description }))

  }

  renderLoading = (isLoading: boolean) => {
    return isLoading && (
      <ActivityIndicator size='large' color='rgba(255, 143, 41, 1.0)' />
    )
  }

  renderError = (error: boolean) => {
    return error && (<Text>Ups Tenemos un Error</Text>)
  }

  renderDetail = () => {
    const {
      itemDetail = {}, description = '', error = false, isLoading = false } = { ...this.state }

    const {
      condition = "",
      sold_quantity = "",
      title = "",
      pictures = "",
      price = "",
      warranty = "",
      seller_address = {},
      location = { coordinate: { latitude: 0, longitude: 0 }, address: "" } } = { ...itemDetail }

    const { city = {}, state = {} } = { ...seller_address }
    const { name: city_name = "" } = { ...city }
    const { name: state_name = "" } = { ...state }

    return !isLoading && !error && (
      <ScrollView scrollIndicatorInsets={{ top: 1, bottom: 1 }} style={styles.container}>

        <View style={styles.infoContainer}>
          <Text style={styles.subTitle}>{condition} | {sold_quantity} vendidos</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        <FlatList
          style={styles.imagesContainer}
          data={pictures}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any, index) => item + index}
          renderItem={({ item }) =>
            <Image
              style={styles.image}
              source={{ uri: item.url }} />
          } />

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{Util.currencyFormat(price)}</Text>
          <Text >{warranty}</Text>

        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{'Información sobre el vendedor'} </Text>
          <View style={styles.locationContainer}>
            <Text style={styles.title}>{'Ubicación'}</Text>
            <Text numberOfLines={1} style={styles.location}>{city_name}, {state_name}</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{'Descripción'}</Text>
          <Text style={styles.title}>{description}</Text>
        </View>

      </ScrollView>)

  }

  render() {
    const { isLoading = true, error = false } = { ...this.state }

    return (
      <View >
        {this.renderLoading(isLoading)}
        {this.renderDetail()}
        {this.renderError(error)}
      </View >
    );
  }
};