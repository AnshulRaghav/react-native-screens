import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class FaceVerification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                source={require('../Avatar/face.png')} 
                style={styles.img}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>VERIFY AGAIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#ffffff',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    img : {
        height:400,
        width:300,
        marginTop:48
    },
    btn :{
        backgroundColor:'#CA16FE',
        padding:16,
        paddingLeft:32,
        paddingRight:32,
        borderRadius:24,
        marginBottom:16,
        width:'80%'
    },
    btnTxt : {
        fontWeight:'bold',
        color:'#ffffff',
        alignSelf:'center',
        fontSize:16
    }
})
