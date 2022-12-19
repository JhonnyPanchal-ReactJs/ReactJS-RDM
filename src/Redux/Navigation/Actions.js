export const ACTION_TYPES = {
    // action types
    SELECTED_MENU: 'SELECTED_MENU',
    SHOW_NAVBAR: 'SHOW_NAVBAR',
    HIDE_NAVBAR: 'HIDE_NAVBAR'
};

// Actions methods
export const updateMenu = (menu) => {
    return {
        type: ACTION_TYPES.SELECTED_MENU,
        payload: menu
    };
};

export const showTopNavigation = () => {
    return {
        type: ACTION_TYPES.SHOW_NAVBAR
    };
};

export const hideTopNavigation = () => {
    return {
        type: ACTION_TYPES.HIDE_NAVBAR
    };
};
