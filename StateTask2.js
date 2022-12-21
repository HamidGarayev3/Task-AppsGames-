import { View, Text, Button } from 'react-native'
import React,{ useState } from 'react'

const StateTask2 = () => {
    const[counter,setcounter]=useState(0)

    const randomCount=()=>{
        let randomCount=Math.floor(Math.random()*1000);
        setcounter(randomCount)
    }
  return (
    <View style={{alignContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:32,color:'purple',fontWeight:'bold'}}>{counter}</Text>
      <Button title='Random Number' onPress={()=>randomCount()}></Button>
    </View>
  )
}

export default StateTask2