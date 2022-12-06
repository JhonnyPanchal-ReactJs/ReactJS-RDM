import { ACTION_TYPES } from './Actions';

const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

const initState = {
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    userInfo,
    accessToken: localStorage.getItem('accessToken')
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_USER:
            return {
                ...state,
                userInfo: action.userInfo,
                accessToken: action.accessToken,
                isLoggedIn: true
            };

        case ACTION_TYPES.LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: {},
                accessToken: null
            };

        case ACTION_TYPES.UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: { ...action.values }
            };

        default:
            return state;
    }
};

export default Reducer;
