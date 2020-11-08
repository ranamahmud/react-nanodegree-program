import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { ScrollView } from 'react-native-gesture-handler';
import History from './components/History';
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <History />
      </View>
    </Provider>
  );
}
