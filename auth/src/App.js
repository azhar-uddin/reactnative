import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
	state = { loggedIn: null };

	componentWillMount(){
		firebase.initializeApp({
		    apiKey: 'AIzaSyBhRLN_igFpen-pjqSz2ETMOmcAfNUMFlI',
		    authDomain: 'authentication-18e00.firebaseapp.com',
		    databaseURL: 'https://authentication-18e00.firebaseio.com',
		    projectId: 'authentication-18e00',
		    storageBucket: 'authentication-18e00.appspot.com',
		    messagingSenderId: '512315174886'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({loggedIn: true});
			} else {
				this.setState({loggedIn: false});
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
				return <Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication'/>
				<View>{this.renderContent()}</View>
			</View>
		);
	}
};


export default App;