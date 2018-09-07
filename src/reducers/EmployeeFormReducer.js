import {
    EMPLOYEE_UPDATE, EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './../actions/types';

const initial_state = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default ( state = initial_state, action) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === { prop :'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value }
            //here we are doing key interpolation means setting declared variable as ket 
        case EMPLOYEE_CREATE:
            return initial_state;
        default:
            return state;
    }
}