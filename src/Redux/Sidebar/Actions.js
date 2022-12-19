export const ACTION_TYPES = {
    // action types
    SELECTED_MENU: 'SELECTED_MENU',
    SHOW_SIDEBAR: 'SHOW_SIDEBAR',
    HIDE_SIDEBAR: 'HIDE_SIDEBAR'
};

// Actions methods
export const updateMenu = (menu) => {
    return {
        type: ACTION_TYPES.SELECTED_MENU,
        payload: menu
    };
};

export const showSideBar = () => {
    return {
        type: ACTION_TYPES.SHOW_SIDEBAR
    };
};

export const hideSideBar = () => {
    return {
        type: ACTION_TYPES.HIDE_SIDEBAR
    };
};
