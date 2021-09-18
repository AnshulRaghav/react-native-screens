import React, { Component } from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Settings','Profile','Face Verification','About Us']
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
                {this.state.tabs.map((item,index) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate(item)}
                        key={item}
                        style={styles.tabs}>
                            <Text style={{fontWeight:'bold'}}>{item}</Text>
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
        width:'80%',
        fontSize:24,
        alignSelf:'center',
        padding:16,
        margin:16,
        alignItems:'center'
    }
})

