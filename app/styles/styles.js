// common stylesheet for all views

import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 15
  },

  center: {
    textAlign: 'center'
  },

  heading: {
    fontSize: 20,
    marginBottom: 10
  },

  subHeading: {
    fontSize: 15,
    marginBottom: 10
  },

  link: {
    color: '#07c',
    marginBottom: 10,
    fontSize: 20
  },

  headerItem: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    margin: 10
  },

  message: {
    fontSize: 25,
    textAlign: 'center',
    color: 'blue'
  }
});

module.exports = styles;