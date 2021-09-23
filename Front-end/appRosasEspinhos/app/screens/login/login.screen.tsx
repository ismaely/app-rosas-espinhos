import React from 'react';
import {SafeAreaView, View, ImageBackground, Text} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import {loginStyle} from './login.styles';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <ImageBackground
          style={loginStyle.image}
          source={require('../../../public/asstes/img/login/s3x1.png')}>
          <View style={loginStyle.viewCard}>
            <Text style={loginStyle.textLogin}> LOGIN USER</Text>
            <Card.Content>
              <TextInput
                label="Email"
                keyboardType="email-address"
                mode="outlined"></TextInput>
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={true}
              />
              <Button uppercase={false} style={loginStyle.cardButton}>
                <Text style={loginStyle.textButton}>
                  Esqueçeu o email/password
                </Text>
              </Button>
              <Button mode="contained" style={loginStyle.cardButton}>
                <Text style={loginStyle.textEnviar}> Login</Text>
              </Button>
              <Button style={loginStyle.cardButton}>
                <Text style={loginStyle.textButton}> REGISTAR-SE</Text>
              </Button>
            </Card.Content>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
