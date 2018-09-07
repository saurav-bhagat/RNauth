import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type : EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}
//curly braces in parantesis means a object wll be passed
//with these properties
export const loginUser = ({ email, password })  => {
    return (dispatch) => {
        //show loading button
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
            Actions.main();
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => {
                  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
                  Actions.main();
              })
              .catch((err) => {
                  console.log(err);
                  dispatch({ type: LOGIN_USER_FAILED });
              })
        });
    }
};
 
/*
redux thunk is used to handle async action in redux
with redux thunk from an actioncreator(function) , we don't return an object but a function and 
that function will be called with a 'dispatch', dispatch method will allow us to manually dispatch 
action
*/