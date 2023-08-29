import React, {Component} from "react";
import { View,Text,StyleSheet } from "react-native";


export default class Test extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.textStyle}>
                    hiiiiii
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create  ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        color: 'red',
        fontSize: 40,
        
    }
})