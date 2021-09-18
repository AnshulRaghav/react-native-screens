import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default class FaceVerification extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#ffffff',flex:1,alignItems:'center',justifyContent:'space-between'}}>
                {/* <View style={{flex:.8,backgroundColor:'red'}}> */}
                    <Image 
                    source={require('../Avatar/face.png')} 
                    style={{height:400,width:300,marginTop:48}}
                    />
                {/* </View> */}
                <TouchableOpacity style={{backgroundColor:'#CA16FE',padding:16,paddingLeft:32,paddingRight:32,borderRadius:24,marginBottom:16,width:'80%'}}>
                    <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',fontSize:16}}>VERIFY AGAIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
