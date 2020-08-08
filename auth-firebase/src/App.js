import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/Coomon';
import LoginForm from './Components/LoginForm'

class App extends Component {
    state ={ loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAL0a6a3XQRuPX_SVRB_3tYjXQnnEpGZLo',
            authDomain: 'authentication-d2695.firebaseapp.com',
            databaseURL: 'https://authentication-d2695.firebaseio.com',
            storageBucket: 'authentication-d2695.appspot.com',
            messagingSenderId: '927627007526',
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />
        }
    }

    render() {
        return (
            <>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </>
        );
    }
}

export default App;