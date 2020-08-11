import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native';
import firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';

posts = [
    {
        id: '1',
        name: 'manu',
        text: 'If your project is a standard React Native project created using react-native init (it should have an ios/android directory), then follow these installation instructions:',
        timestamp: 1236542,
        avatar: require('../assets/testimonials/5.jpg'),
        image: require('../assets/testimonials/6.jpg')
    },
    {
        id: '2',
        name: 'jaan',
        text: 'If your project is a standard React Native project created using react-native init (it should have an ios/android directory), then follow these installation instructions:',
        timestamp: 8975955,
        avatar: require('../assets/testimonials/3.jpg'),
        image: require('../assets/testimonials/1.jpg')
    },
    {
        id: '3',
        name: 'manu',
        text: 'If your project is a standard React Native project created using react-native init (it should have an ios/android directory), then follow these installation instructions:',
        timestamp: 42589759,
        avatar: require('../assets/testimonials/2.jpg'),
        image: require('../assets/testimonials/4.jpg')
    },
    {
        id: '4',
        name: 'jaan',
        text: 'If your project is a standard React Native project created using react-native init (it should have an ios/android directory), then follow these installation instructions:',
        timestamp: 123654258975955,
        avatar: require('../assets/testimonials/3.jpg'),
        image: require('../assets/testimonials/1.jpg')
    },
]

export default class HomeScreens extends Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}> 
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name='ios-more' size={24} color='#73788B' />
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} resizeMode='cover' />

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='ios-heart-empty' size={24} color='#73788B' style={{marginRight: 16}} />
                        <Ionicons name='ios-chatboxes' size={24} color='#73788B' />
                    </View>
                </View>
            </View>
        );
    };

    // state = {
    //     email: '',
    //     displayName: ''
    // }

    // componentDidMount() {
    //     const {email, displayName} = firebase.auth().currentUser;

    //     this.setState({email, displayName});
    // }

    // signOutUser = () => {
    //     firebase.auth().signOut();
    // };

    render () {
        return (
            <View style={styles.container}>
                {/* <Text>Hi {this.state.email}!</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity> */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList 
                    style={styles.feed}
                    showsVerticalScrollIndicator = {false}
                    data={posts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderPost(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#EFECF4'
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: {height: 5},
        borderRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 8,
        flexDirection: 'row',
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#454D65'
    },
    timestap: {
        fontSize: 11,
        color: '#C4C6CE',
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: '#838899'
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});