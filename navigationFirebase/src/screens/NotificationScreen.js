import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

export default class NotificationScreen extends Component {
    render () {
        // LayoutAnimation.easeInEaseOut();
        
        return (
            <View style={styles.container}>
                <Text>Notification Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});