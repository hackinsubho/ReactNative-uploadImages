import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uploadImage from './components/uploadImages';
export default class App extends React.Component {
  render() {
    return (
      <uploadImages />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
