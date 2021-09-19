import React, { Component } from 'react'
import { Text, View,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Upload Poster','Face Verification','Edit Profile','Settings','Chat Price','About Us']
        }
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#ffffff'}}>
                {this.state.tabs.map((item,index) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate(item)}
                        key={item}
                        style={styles.tabs}>
                            <Text style={{fontWeight:'bold',fontSize:18}}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    tabs : {
        backgroundColor:'#EEEEF6',
        borderRadius:12,
        width:'80%',
        fontSize:24,
        alignSelf:'center',
        padding:16,
        margin:16,
        alignItems:'center'
    }
})

