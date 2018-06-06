import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        prop,
        value
    }
}

export const employeeCreate = ({ name, phone, shift }) => dispatch => {

    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.pop();
        });
}

//call fetch employees one time, firebase automatically setup event handler to watch new value 
//from database, redux can use that to dispatch new action everytime a new value come across
export const employeesFetch = () => dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
        });
}