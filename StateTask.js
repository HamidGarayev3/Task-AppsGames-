import { View, Text, Button } from 'react-native'
import React,{ useState } from 'react'

const StateTask = () => {
    const [counter,setcounter]=useState(0);
    const increase=()=>{
        setcounter(counter+2)
    }
  return (
    <View style={{alignContent:'center',alignItems:'center'}}>


        
      <Text style={{fontSize:32,color:'purple',fontWeight:'bold'}}>{counter}</Text>
      <Button title='Change Value' onPress={()=>increase()}></Button>
    </View>
  )
}

export default StateTask