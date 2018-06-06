import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from '../actions';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //key interpolation
            return { ...state, [action.prop]: action.value }
        case EMPLOYEE_CREATE_SUCCESS:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}