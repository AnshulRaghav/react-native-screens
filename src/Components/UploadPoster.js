import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class UploadPoster extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Upload A Poster</Text>
                <View style={{flex:.7}}>
                    <View style={styles.addView}>
                        <TouchableOpacity style={styles.addBtn}>
                            <Entypo name="plus" size={48} color="#CA16FE" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Image source={require('../Avatar/sm.jpg')} style={styles.img} />
                        <Image source={require('../Avatar/sm.jpg')} style={styles.img} />
                        <Image source={require('../Avatar/sm.jpg')} style={styles.img} />
                    </View>
                </View>
                <Text style={{color:'grey'}}>
                    Please upload a <Text style={{color:'#CA16FE'}}>clear</Text> and <Text style={{color:'#CA16FE'}}>handsome</Text> picture of <Text style={{color:'#CA16FE'}}>yourself.</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        paddingLeft:16,
        paddingRight:16
    },
    h1:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16
    },
    addView:{
        flex:1,
        backgroundColor:'#EEEEF6',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    addBtn : {
        width:64,
        height:64,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:32
    },
    img :{
        width:65,
        height:80,
        borderRadius:12,
        margin:8,
        marginTop:16
    }
})
