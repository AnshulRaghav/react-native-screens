import React, { Component } from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Settings','Profile','Extra']
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
                {this.state.tabs.map((item,index) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Settings')}
                        key={item}
                        style={styles.tabs}>
                            <Text>{item}</Text>
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

