/*
 * Home View
 * The Home view component render app home or root path
 */

import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import styles from '../styles/styles';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number: '',
        message: 'Lets kill it!',
        animating: false,
        game: true,
        secretNumber: ((min, max) => {
                          return Math.floor(Math.random() * (max - min)) + min;
                      })(1, 100)
    }
  }

  sendGuess() {
    this.setState({animating: true});
    this.setState({message: ''});
    setTimeout(() => {
        let message = (this.state.secretNumber == this.state.number)
                        ? 'Congratulations, you killed it !!'
                        : (this.state.secretNumber > this.state.number)
                          ? 'Sorry, Too small ;)'
                          : 'Sorry, Too big :(';
        this.setState({message});
        this.setState({animating: false});
        this.setState({game: this.state.secretNumber != this.state.number})
        this.setState({number: ''});
    }, 500);
  }

  replay() {
    this.setState({animating: true});
    this.setState({game: true});
    this.setState({secretNumber: ((min, max) => {
                                    return Math.floor(Math.random() * (max - min)) + min;
                                 })(1, 100)});
    this.setState({message: ''});
    setTimeout(() => {
    this.setState({message: 'Lets kill it again!'});
        this.setState({animating: false});
    }, 500);
  }

  render() {
	return (
        <View style={styles.container}>

			<Text style={styles.heading}>
			  Welcome to Guess Game!
			</Text>

            { this.state.game &&

                <View>
                    <Text style={styles.subHeading}>
                      Guess number between 1 - 100
                    </Text>

                    <TextInput
                      style={{height: 50}}
                      placeholder="Please enter number"
                      value={this.state.number}
                      onChangeText={(number) => this.setState({number})}
                    />

                    <Button
                      onPress={this.sendGuess.bind(this)}
                      title="Send"
                      color="#841584"
                      accessibilityLabel="Send Guess"
                    />

                    <ActivityIndicator
                      animating={this.state.animating}
                      style={[styles.centering, {height: 40}]}
                      size="large"
                    />

                </View>

            }

            <Text style={styles.message}>
                {this.state.message}
            </Text>

            { !this.state.game &&

                <Button
                  onPress={this.replay.bind(this)}
                  title="Play Again"
                  color="#841584"
                  accessibilityLabel="Play Again"
                />

            }

        </View>
	)
  }
}

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};