/*
 * Settings View
 * The Settings view component displays details related to app settings, build etc
 */

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Linking } from 'react-native';

import styles from '../styles/styles';

export default class SettingsView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Guess Game</Text>
        <Text style={styles.heading}>Version: v0.0.1</Text>
        <TouchableHighlight onPress={() =>
            Linking.openURL('https://github.com/pradeep1991singh/GuessGame')}>
          <Text style={styles.link}>Source code &rarr;</Text>
        </TouchableHighlight>
      </View>
    );
  }
}