import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

// a single actioncreator function for handling
// all form fields
//this func paramter tells that it will be called with a object having these 2 properties
export const employeeUpdate = ({ prop, value }) => {
    return {
        type : EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({  name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop();
            });
    };
    //an object needs to be returned from action creater(with type property)
    //so it appeares that we used thunk
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    //since this is asynchrounus, so redux thunk
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};