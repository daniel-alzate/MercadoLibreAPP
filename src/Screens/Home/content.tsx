import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
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

  _onBlur = () => {
    this.props.navigation.navigate('Items', { search: this.state.search })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={search => this.setState({ search })}
            onBlur={() => this._onBlur()}
            placeholder="Buscar productos, marcas y más...">
          </TextInput>
        </View>

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