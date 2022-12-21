import { View, Text } from 'react-native'
import React,{ useState } from 'react'
import {towns} from './cities'


const StateTask7 = () => {
    const[cities,setcities]=useState(towns)
    
  return (
    <View>
      <Text>StateTask7</Text>
    </View>
  )
}

export default StateTask7