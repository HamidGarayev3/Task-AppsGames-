import { View, Text, Button } from 'react-native'
import React,{ useState } from 'react'
import {towns} from './cities'

const StateTask4 = () => {
    
    
    const [cities,setcities]=useState(towns)
    const reverseOrder=()=>{
        let reversedCities=cities.reverse()
        setcities([...reversedCities])
    }
   
  return (
    <View>w
          {cities.map((item)=><Text>{item}</Text>)}
          <Button title='Reverse Array' onPress={()=>reverseOrder()}></Button>
    </View>
  )
}

export default StateTask4