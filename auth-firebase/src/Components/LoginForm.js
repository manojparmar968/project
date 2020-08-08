import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputText, Spinner } from './Coomon';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Faild', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
           <Card>
               <CardSection >
                   <InputText
                        placeholder='user@gmail.com'
                        label='Email' 
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                   />
               </CardSection>
                    
               <CardSection >
                    <InputText
                        placeholder='password'
                        secureTextEntry={true}
                        label='Password' 
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
               </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

               <CardSection>
                   {this.renderButton()}
               </CardSection>
           </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;