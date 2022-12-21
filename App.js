import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card'
import StateTask from './StateTask'
import StateTask2 from './StateTask2';
import StateTask3 from './StateTask3';
import StateTask4 from './StateTask4';
import StateTask5 from './StateTask5';
import StateTask6 from './StateTask6';
import StateTask7 from './StateTask7';


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
      {/* <StateTask></StateTask> */}
      {/* <StateTask2></StateTask2> */}
      {/* <StateTask3></StateTask3> */}
      {/* <StateTask4></StateTask4> */}
      {/* <StateTask5></StateTask5> */}
      {/* <StateTask6></StateTask6> */}
      {/* <StateTask7></StateTask7> */}

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
