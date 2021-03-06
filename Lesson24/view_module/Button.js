/**
 * guangneng
 * 2016-05-27 13:32:00
 */

import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class Button extends Component{
    constructor(props) {
        super(props);
    }
    
    _handlePress(){
        if(this.props.enabled && this.props.onPress){
            this.props.onPress();
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={this._handlePress.bind(this)}>
                <View style={[styles.button,styles.center,this.props.enabled?{}:styles.buttonDisable]}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>                
                </View>
            
            </TouchableOpacity>
            
        );
    }    
}

const styles = StyleSheet.create({
        button: {
            width: 0,
            margin:5,
            borderColor:'green',
            backgroundColor:0xabcabc,
            borderRadius:10,
            padding:10
        },

        buttonDisable: {
            backgroundColor: 'black',
            borderRadius:10,
            opacity: 0.5
        },

        buttonText: {
            color: 'white',
        },
        center:{
            justifyContent:'center',
            alignItems:'center'
        }
        
    }
);