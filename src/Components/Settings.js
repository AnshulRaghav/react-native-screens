import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Blocked','Feed','Rate','About']
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
                {this.state.tabs.map((item,index) => {
                    return(
                        <View 
                        key={item}
                        style={styles.tabs}>
                            <Text>{item}</Text>
                            <SimpleLineIcons name="arrow-right" size={18}/>
                        </View>
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
        fontSize:32,
        alignSelf:'center',
        padding:18,
        marginBottom:8,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})