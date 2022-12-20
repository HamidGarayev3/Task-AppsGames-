import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card'


export default function App() {

  const apps=[
    {
      name:'Slack',
      usedStorage:'101MB'
    },
    {
      name:'DU Battery Saver',
      usedStorage:'37MB'
    },
    {
      name:'Google',
      usedStorage:'300MB'
    },
    {
      name:'Youtube',
      usedStorage:'382MB'
    },
    {
      name:'Facebook',
      usedStorage:'446MB'
    },
    {
      name:'Flipboard',
      usedStorage:'264MB'
    },
    {
      name:'Google Photos',
      usedStorage:'406MB'
    },
    {
      name:'Chrome Canary',
      usedStorage:'198MB'
    },
    {
      name:'Solid Explorer',
      usedStorage:'27MB'
    },
  ]
  
  return (
    <View style={styles.container}>
        
        <FlatList
        data={apps}
        renderItem={Card}
      />
    </View>

    
  );




}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
