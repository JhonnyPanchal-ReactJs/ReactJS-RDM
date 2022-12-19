export const ACTION_TYPES = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    UPDATE_USER_INFO: 'UPDATE_USER_INFO'
};

export const loginUser = (data) => {
    const accessToken = data?.token;
    const appToken = data.apps[0]?.token;

    const refreshToken = data?.refreshtoken
    delete data?.accessToken;
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('appToken', appToken);

    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('refresh_token',refreshToken)
    return {
        type: ACTION_TYPES.LOGIN_USER,
        userInfo: data,
        accessToken
    };
};

export const logoutUser = () => {
    localStorage.clear();
    return {
        type: ACTION_TYPES.LOGOUT_USER
    };
};

export const updateUserInfo = (values) => {
    localStorage.setItem('userInfo', JSON.stringify(values));
    return {
        type: ACTION_TYPES.UPDATE_USER_INFO,
        values
    };
};
