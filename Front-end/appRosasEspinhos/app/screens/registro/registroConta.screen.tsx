import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {Appbar, TextInput, Card, Button} from 'react-native-paper';
import {registarStyle} from './registar.style';

export const RegistarConta = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction />

          <Appbar.Content title="Registar-se" />
        </Appbar.Header>
        <View style={registarStyle.content}>
          <TextInput label="Nome do usuario" />
          <TextInput label="Telefone" keyboardType="phone-pad" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput
            label="Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off-outline" />}
          />
          <TextInput label="Confirm Password" secureTextEntry={true} />
          <Button mode="contained" style={registarStyle.styleButton}>
            {' '}
            Registar
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
