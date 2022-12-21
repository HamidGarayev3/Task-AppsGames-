import { View, Text, Button } from 'react-native'
import React from 'react'
import{ useState } from 'react'


const StateTask6 = () => {
    const[counter,setcounter]=useState(0)
    const Increase10=()=>{
        if(counter<100){
            setcounter(counter+10)
        }else{
            setcounter([])
        }
    }
  return (
    <View>
      <Text>{counter}</Text>
      <Button title='Incrase 10' onPress={()=>Increase10()}></Button>
    </View>
  )
}

export default StateTask6