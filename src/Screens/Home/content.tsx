import React, { Component } from 'react';
import {
  View
} from 'react-native';

import styles from './style'

export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

  constructor(props: HomeScreenProps) {
    super(props)
    this.state = {
      categories: {},
      search: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}