import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import reduxThunk from 'redux-thunk';
import Router from './src/router';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA8rHUr8TDjTAD5tQHsBDHAN8gSHUcbnas",
      authDomain: "reactnativeemployee.firebaseapp.com",
      databaseURL: "https://reactnativeemployee.firebaseio.com",
      projectId: "reactnativeemployee",
      storageBucket: "reactnativeemployee.appspot.com",
      messagingSenderId: "876309308402"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
