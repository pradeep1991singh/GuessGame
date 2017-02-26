/*
 * List View Basics
 * The List View component displays a vertically scrolling list of changing,
 * but similarly structured, data.
 */

import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

import styles from '../styles/styles';

export default class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Name List</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}