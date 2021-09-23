import {StyleSheet, View } from 'react-native';

export const loginStyle = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    width: '90%',
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 60,
  },
  image: {
    width: '106%',
    height: '100%',
  },
  viewCard: {
    marginTop: 200,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  textEnviar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});
