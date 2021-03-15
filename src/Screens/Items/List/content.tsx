import React, { Component } from 'react';
import ItemCard from '../../../Components/Items/Card'
import { getProducts, getProductsByCategory } from '../../../Services'
import styles from './style'
import {
  View,
  FlatList,
} from 'react-native';

export default class ItemList extends Component<ItemsListProps, ItemsListState> {

  constructor(props: ItemsListProps) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { search = "", id = "" } = { ...this.props.navigation.state.params }
    if (id !== "") {
      getProductsByCategory(id).then(items => this.setState({ items: items }));
    } else {
      getProducts(search).then(items => this.setState({ items: items }));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.items}
          renderItem={({ item }) =>
            <ItemCard {...item} onSelectItem={() => this.props.navigation.navigate('Detail',
              {
                ...item
              })} />
          }
        />
      </View>
    );
  }
};