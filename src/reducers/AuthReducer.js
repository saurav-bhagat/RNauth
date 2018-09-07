import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from './../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false, email: '',password: '' }
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed.', password: '', email: '', loading: false}
        case LOGIN_USER:
            return { ...state, loading: true, error: ''}
        default:
            return state;
    }
};


//we can't mutate application state as redux look for change in the state value
//and if there is a change only then it rerenders the component hence if we modify the 
//existing state, in memory both(return value and existing state variable) will be same
//hence no re render