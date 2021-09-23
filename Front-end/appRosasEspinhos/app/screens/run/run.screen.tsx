import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';

export const runStyle = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
  },
  view: {
    width: '90%',
  },
  image: {
    width: '109%',
    height: '100%',
  },
  viewText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 381,
    marginLeft: 15,
    marginRight: 15,
  },

  styleText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#000',
    marginBottom: 27,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
});

export const RunScreen = () => {
  return (
    <SafeAreaView style={runStyle.content}>
      <View style={runStyle.view}>
        <ImageBackground
          style={runStyle.image}
          source={require('../../../public/asstes/img/run/y3x2.png')}>
          <View style={runStyle.viewText}>
            <Button mode="contained" style={runStyle.styleText}>
              <Text style={runStyle.styleText}> Login</Text>
            </Button>
            <Button mode="contained" style={runStyle.styleText}>
              <Text style={runStyle.styleText}> Registar-se</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
