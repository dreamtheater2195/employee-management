import firebase from 'firebase';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER = 'LOGIN_USER';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        text
    }
}

export const loginUser = ({ email, password }) => dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: LOGIN_USER_SUCCESS, user })
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    dispatch({ type: LOGIN_USER_SUCCESS, user })
                })
                .catch(() => {
                    dispatch({ type: LOGIN_USER_FAIL });
                })
        })
}
