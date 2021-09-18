import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class ChatPrice extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffffff',alignItems:'center'}}>
                <Image source={require('../Avatar/pr.png')} style={{width:300}}/>
                <View style={{backgroundColor:'#F8F8F8',padding:16,borderRadius:12,margin:16}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Price Rule</Text>
                    <Text style={{paddingTop:8,paddingBottom:8,color:'grey'}}>1. If you need help with your React Native app, the right place to go depends on the type of help that you need.</Text>
                    <Text style={{paddingTop:8,paddingBottom:8,color:'grey'}}>2. If you need help with your React Native app, the right place to go depends on the type of help that you need.</Text>
                </View>
            </View>
        )
    }
}
