import { View, Text, Button } from 'react-native'
import React,{ useState } from 'react'

const StateTask3 = () => {
    const [fontSize,setFontSize]=useState(32)
    const randomSize=()=>{
        let rs=Math.floor(Math.random()*50)
        setFontSize(rs)
    }
  return (
    <View style={{alignContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:fontSize,color:'purple',fontWeight:'bold'}}>Biri geder daha yaxshisi geler</Text>
      <Button title="Change Size" onPress={()=>randomSize()}></Button>
    </View>
  )
}

export default StateTask3