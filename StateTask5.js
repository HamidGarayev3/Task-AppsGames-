import { View, Text, Button } from 'react-native'
import React,{ useState } from 'react'
import {towns} from './cities'


const StateTask5 = () => {
    const[cities,setcities]=useState(towns)

    const cityA=()=>{
        let startsA=cities.filter(q=>q.startsWith('A'))
        setcities([...startsA])
    }
  return (
    <View>
      {cities.map((item)=><Text>{item}</Text>)}
      <Button title='Starts with A' onPress={()=>cityA()}></Button>
    </View>
  )
}

export default StateTask5