import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyC6__DMhoUp4EGjVu-c6Z0ojOvP0HV-Qwg',
			authDomain: 'manager-26508.firebaseapp.com',
			databaseURL: 'https://manager-26508.firebaseio.com',
			projectId: 'manager-26508',
			storageBucket: '',
			messagingSenderId: '217421669484'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;