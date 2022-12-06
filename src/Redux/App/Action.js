export const ACTION_TYPES = {
    SHOW_TOP_BAR: 'SHOW_TOP_BAR',
    HIDE_TOP_BAR: 'HIDE_TOP_BAR',

    SHOW_TOP_BAR_WITH_TRANSITION: 'SHOW_TOP_BAR_WITH_TRANSITION',
    HIDE_TOP_BAR_WITH_TRANSITION: 'HIDE_TOP_BAR_WITH_TRANSITION',

    SHOW_FOOTER: 'SHOW_FOOTER',
    HIDE_FOOTER: 'HIDE_FOOTER',

    SHOW_USER_MENU_TOGGLE: 'SHOW_USER_MENU_TOGGLE',

    SHOW_LOGIN_PAGE_HEADER: 'SHOW_LOGIN_PAGE_HEADER',
    SHOW_QUESTIONNAIRE_PAGE_HEADER: 'SHOW_QUESTIONNAIRE_PAGE_HEADER',
    SHOW_NORMAL_HEADER: 'SHOW_NORMAL_HEADER',

    TOAST_MESSAGE_ENABLE: 'TOAST_MESSAGE_ENABLE',
    TOAST_MESSAGE_DISABLE: 'TOAST_MESSAGE_DISABLE'
};

export const showTopBar = () => {
    return {
        type: ACTION_TYPES.SHOW_TOP_BAR
    };
};

export const hideTopBar = () => {
    return {
        type: ACTION_TYPES.HIDE_TOP_BAR
    };
};

export const showUserMenu = (data) => {
    return {
        type: ACTION_TYPES.SHOW_USER_MENU_TOGGLE,
        data
    };
};

export const showTopBarWithTransition = () => {
    return {
        type: ACTION_TYPES.SHOW_TOP_BAR_WITH_TRANSITION
    };
};

export const hideTopBarWithTransition = () => {
    return {
        type: ACTION_TYPES.HIDE_TOP_BAR_WITH_TRANSITION
    };
};

export const showFooter = () => {
    return {
        type: ACTION_TYPES.SHOW_FOOTER
    };
};

export const hideFooter = () => {
    return {
        type: ACTION_TYPES.HIDE_FOOTER
    };
};

export const showToast = (message, variant, duration = 0) => {
    return {
        type: ACTION_TYPES.TOAST_MESSAGE_ENABLE,
        message: message || '',
        variant: variant || '',
        duration: duration
    };
};
export const hideToast = () => {
    return {
        type: ACTION_TYPES.TOAST_MESSAGE_DISABLE
    };
};


