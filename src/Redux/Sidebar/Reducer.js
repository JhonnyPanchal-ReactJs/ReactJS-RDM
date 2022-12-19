import { ACTION_TYPES } from './Actions';

const initState = {
    selectedMenu: "",
    showSideBar: true,
    showTopBar: true
};

const Reducer = (state = initState, action) => {
    debugger
    switch (action.type) {
        case ACTION_TYPES.SELECTED_MENU:
            return {
                ...state,
                selectedMenu: action.payload,
            };

        case ACTION_TYPES.SHOW_SIDEBAR:
            return {
                ...state,
                showSideBar: true
            }

        case ACTION_TYPES.HIDE_SIDEBAR:
            return {
                ...state,
                showSideBar: false
            }

        case ACTION_TYPES.SHOW_TOPBAR:
            return {
                ...state,
                showTopBar: true
            }

        case ACTION_TYPES.HIDE_TOPBAR:
            return {
                ...state,
                showTopBar: false
            }
        default:
            return state;
    }
};

export default Reducer;
