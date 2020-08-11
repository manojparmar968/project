import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email:'',
        password: '',
        errorMsg: null
    }

    handleLogin = () => {
        const {email, password} = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch(error => this.setState({errorMsg: error.message}));
    }

    render () {
        LayoutAnimation.easeInEaseOut();
        
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'></StatusBar>
                <Text style={styles.greeting}>
                    {'Hello again. \nWellcome back.'}
                </Text>

                <View style={styles.errorMsg}>
                    {this.state.errorMsg && <Text style={styles.error}>{this.state.errorMsg}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                        />
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry
                            autoCapitalize='none' 
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: '#FFF', fontWeight: '500' }}>signin</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ marginTop: 32, alignSelf: 'center'}}
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        New to SocialApp? <Text style={{ fontWeight: '500', color: '#E9446A'}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// LoginScreen.navigationOptions = {
//     header: null
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    errorMsg: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});