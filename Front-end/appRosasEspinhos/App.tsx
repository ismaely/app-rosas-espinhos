/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {Provider as Paperprovider, TextInput} from 'react-native-paper';
import {LoginScreen} from './app/screens/login/login.screen';
import {RunScreen} from './app/screens/run/run.screen';
import {RegistarConta} from './app/screens/registro/registroConta.screen';
import {theme} from './App.style';

const App = () => {
  return (
    <Paperprovider theme={theme}>
      <RegistarConta />
    </Paperprovider>
  );
};

export default App;
