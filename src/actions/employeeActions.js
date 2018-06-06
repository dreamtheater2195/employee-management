import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE_SUCCESS = 'EMPLOYEE_CREATE_SUCCESS';
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';
export const EMPLOYEE_SAVE_SUCCESS = 'EMPLOYEE_SAVE_SUCCESS';
export const EMPLOYEE_DELETE_SUCCESS = 'EMPLOYEE_DELETE_SUCCESS';
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

export const employeeSave = ({ name, phone, shift, uid }) => dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
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

export const employeeDelete = ({ uid }) => dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.pop();
        })
}