import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import React from "react";

const card = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{flex:2}}>
        <Image
          style={{ width: 50, height: 50, marginRight: 15, flex: 2 }}
          source={{
            uri: "https://www.jokesforfunny.com/wp-content/uploads/2021/06/0596bdb89b60fe771acd2f5972a9d3e3.jpg",
          }}
        ></Image>
      </View>
      <View style={{flex:4}}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.storage}>
          {item.usedStorage} - Used moments ago
        </Text>
      </View>
      <View style={{flex:3.5}}>
        <Pressable onPress={()=>{
          alert('AAAAAA QAZA BASMA QAZA BASMAAA')
        }} style={styles.button}>OPEN</Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 80,
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 2,
    width: 80,
    height: 40,
    borderColor: "green",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    borderRadius: 8,
    marginTop: 7,
  },
  title: {
    flex: 4,
    fontSize: 20,
    fontWeight: "400",
  },
  storage: {
    flex: 4,
    color: "gray",
  },
});

export default card;
