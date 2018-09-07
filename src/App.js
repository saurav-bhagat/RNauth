import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import Router from './Router';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{ 
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDY2Y3sWufu3DNZnaRzdU3xd7Go5tb6pKA",
            authDomain: "manager-1fd59.firebaseapp.com",
            databaseURL: "https://manager-1fd59.firebaseio.com",
            projectId: "manager-1fd59",
            storageBucket: "manager-1fd59.appspot.com",
            messagingSenderId: "142552941011"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store} >
               <Router />
            </Provider>
        );
    }
}

export default App;