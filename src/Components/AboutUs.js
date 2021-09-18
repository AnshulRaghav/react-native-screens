import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

export default class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Privacy Policy','Terms of Use','Contact']
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffffff',alignItems:'center'}}>
                <Image source={require('../Avatar/logo.png')} style={{width:100,height:100,marginTop:24}} />
                <Text style={{fontWeight:'bold',fontSize:18,padding:16,paddingBottom:6}}>Lumi</Text>
                <Text style={{marginBottom:24}}>1.0.4.66</Text>
                {this.state.tabs.map((item,index) => {
                    return(
                        <TouchableOpacity 
                        key={item}
                        style={styles.tabs}>
                            <Text style={{fontSize:18}}>{item}</Text>
                            <SimpleLineIcons name="arrow-right" size={18} color="grey"/>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs : {
        backgroundColor:'#E6E6E6',
        borderRadius:12,
        width:'95%',
        alignSelf:'center',
        padding:18,
        marginBottom:8,
        marginTop:8,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
})
