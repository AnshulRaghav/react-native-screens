import React, { Component, useRef,useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions, Modal, TextInput, ScrollView } from 'react-native'
import { SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';

const BioModal = props => {
    const {height: deviceHeight } = Dimensions.get("window");

    const translateYAnim = useRef(new Animated.Value(-deviceHeight)).current;

    useEffect(() => {
        Animated.timing(translateYAnim,{
            toValue: -100,
            duration: 300,
            useNativeDriver:true
        }).start();
    }, [])

    return (
        <React.Fragment>
            <Modal animationType="none" transparent={true} visible={props.visible}>
            <TouchableOpacity 
                onPressOut={props.toggleAnimatedModal}
                activeOpacity={1}
                style={{flex:1,position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,bottom:0,left:0,right:0}}
            >
            </TouchableOpacity>
                <Animated.View 
                    style={{
                        transform:[{translateY:translateYAnim}],
                        alignSelf:'center',
                        width:'70%',
                        top:'50%',
                        padding:16,
                        justifyContent:'center',
                        backgroundColor:'#ffffff',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation:5,
                        borderRadius:20
                    }}
                >
                    {props.children}
                </Animated.View>
            </Modal>
        </React.Fragment>
    )
}

export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs : ['Username','Gender','Age','Country','Bio'],
            showBioModal : false,
            visible : false
        }

        this.toggleAnimatedModal = this.toggleAnimatedModal.bind(this);
    }

    toggleAnimatedModal = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                showBioModal:!prevState.showBioModal,
                visible : !prevState.visible
        }})
    }

    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor:'#ffffff',padding:24}}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../Avatar/sm.jpg')} style={styles.img} />
                        <TouchableOpacity style={styles.dpBtn}>
                            <SimpleLineIcons name="camera" size={16}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:12}}>
                    {this.state.tabs.map((item,index) => {
                        return(
                            <TouchableOpacity 
                            key={item}
                            style={styles.tabs}
                            onPress={item==='Bio' ? this.toggleAnimatedModal : null}
                            >
                                <Text style={{fontSize:14,fontWeight:'bold'}}>{item}</Text>
                                <SimpleLineIcons name="arrow-right" size={14} color="grey"/>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity 
                style={styles.tagTab} 
                >
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FontAwesome5 name="tag" size={18} color="#ffffff" style={styles.icon}/>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>Tag</Text>
                    </View>
                    <SimpleLineIcons name="arrow-right" size={14} color="grey"/>
                </TouchableOpacity>
                {this.state.showBioModal ? 
                    <BioModal toggleAnimatedModal={this.toggleAnimatedModal} visible={this.state.visible}>
                        <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>Bio</Text>
                        <Text style={{color:'grey',marginTop:16,marginBottom:4}}>Up to 50 characters (5/50)</Text>
                        <TextInput style={styles.txtInput} multiline={true} />
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <TouchableOpacity style={styles.btnSecondary} onPress={this.toggleAnimatedModal}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnPrimary}>
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </BioModal> 
                : null}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imgContainer : {
        width:124,
        alignSelf:'center',
        alignItems:'center'
    },
    img: {
        height:120,
        width:120,
        borderRadius:60
    },
    dpBtn : {
        backgroundColor:'#FFD102',
        position:'absolute',
        height:32,
        width:32,
        borderRadius:16,
        borderColor:'#ffffff',
        borderWidth:2,
        bottom:0,
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    tabs : {
        backgroundColor:'#ffffff',
        flex:1,
        width:'100%',
        padding:18,
        paddingBottom:16,
        paddingTop:16,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    tagTab : {
        backgroundColor:'#ffffff',
        padding:18,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
        marginBottom:24
    },
    icon : {
        padding:8,
        backgroundColor:'#FFD102',
        borderRadius:18,
        marginRight:16
    },
    txtInput : {
        backgroundColor:'#EEEEF6',
        borderRadius:6,
        marginBottom:16,
        padding:16
    },
    btnSecondary : {
        borderWidth:2,
        padding:8,
        paddingLeft:16,
        paddingRight:16,
        borderRadius:24,
        borderColor:'#EEEEF6'
    },
    btnPrimary : {
        backgroundColor:'#FFD102',
        padding:8,
        paddingLeft:16,
        paddingRight:16,
        borderRadius:24,
        marginLeft:8
    }
})
