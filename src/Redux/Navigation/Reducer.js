import { ACTION_TYPES } from './Actions';

const initState = {
    selectedMenu: "",
    showNavBar: true
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECTED_MENU:
            return {
                ...state,
                selectedMenu: action.payload,
            };

        case ACTION_TYPES.SHOW_NAVBAR:
            return {
                ...state,
                showTopNavigation: true
            }

        case ACTION_TYPES.HIDE_NAVBAR:
            return {
                ...state,
                showSideBar: false
            }

        default:
            return state;
    }
};

export default Reducer;
