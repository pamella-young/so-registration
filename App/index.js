/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container } from './Components'
import Login from './Screens/Login'

if(__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default App
