import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { getCategories } from '../../Services';
import CategoryCard from '../../Components/Category/Card'

import styles from './style'

export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

  constructor(props: HomeScreenProps) {
    super(props)
    this.state = {
      categories: {},
      search: ''
    }
  }

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories }))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.ListHeader}>{'Categorías'}</Text>}
          data={this.state.categories}
          renderItem={({ item }) =>
            <CategoryCard {...item} onSelectCategory={() => this.props.navigation.navigate('Items', { ...item })} />
          }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}