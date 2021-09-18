import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

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
                            <Text style={{fontSize:18}}>{item}</Text>
                            <SimpleLineIcons name="arrow-right" size={18} color="grey"/>
                        </View>
                    )
                })}
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FA58BF', '#CA16FE']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        LOGOUT
                    </Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs : {
        backgroundColor:'#EEEEF6',
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
    linearGradient: {
        paddingLeft: 48,
        paddingRight: 48,
        borderRadius: 24,
        alignSelf:'center',
        marginTop:16
      },
      buttonText: {
        fontSize:16,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})