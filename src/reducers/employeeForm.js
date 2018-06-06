import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions';

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
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}