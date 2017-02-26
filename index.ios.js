/*
 * Guess Game
 * Starter app show-casing react native app handling view routing, lists
 * and external links
 */

import React, { Component } from 'react';
import { AppRegistry,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

import HomeView from './app/components/HomeView';
import SettingsView from './app/components/SettingsView';
import styles from './app/styles/styles';

export default class GuessGame extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home', id: 'home' }}
        renderScene={ this.navigatorRenderScene }

        sceneStyle={{marginTop: Navigator.NavigationBar.Styles.General.NavBarHeight + 20}}

        navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) => {
                    if (route.id === 'home') {
                      return null;
                    } else {
                      return (
                        <TouchableHighlight onPress={() => navigator.pop()}>
                          <Text style={styles.headerItem}>&larr;</Text>
                        </TouchableHighlight>
                      );
                    }
                 },

                 Title: (route, navigator, index, navState) => {
                    return (
                        <Text style={styles.headerItem}>{route.title}</Text>
                    );
                 },

                 RightButton: (route, navigator, index, navState) => {
                     if (route.id === 'settings') {
                       return null;
                     } else {
                      return (
                        <TouchableHighlight onPress={() =>
                            navigator.push({title: 'App settings', id: 'settings'})}>
                          <Text style={styles.headerItem}>Next</Text>
                        </TouchableHighlight>
                      );
                     }
                 }
               }}

               style={{backgroundColor: 'darkcyan'}}
             />
        }
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'home':
        return (<HomeView
                    title={route.title}
                    onForward={() => {
                      navigator.push({
                        title: 'List',
                        id: 'list',
                      });
                    }}
                  />);
      case 'settings':
        return (<SettingsView
                    title={route.title}
                    onForward={() => {
                      navigator.push({
                        title: 'Home',
                        id: 'home',
                      });
                    }}
                  />);
    }
  }

}

AppRegistry.registerComponent('GuessGame', () => GuessGame);
