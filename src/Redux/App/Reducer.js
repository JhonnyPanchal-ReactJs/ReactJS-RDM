import { ACTION_TYPES } from './Action';

const initState = {
    showTopBar: true,
    showTopBarWithTransition: true,
    showLoginPageHeader: false,
    showNormalHeader: false,
    toast: {
        enable: false,
        message: '',
        variant: '',
        duration: 0
    }
};

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SHOW_TOP_BAR:
            return {
                ...state,
                showTopBar: false
            };

        case ACTION_TYPES.HIDE_TOP_BAR:
            return {
                ...state,
                showTopBar: false
            };
        case ACTION_TYPES.SHOW_USER_MENU_TOGGLE:
            return {
                ...state,
                showUserMenuToggle: action?.data?.show
            };

        case ACTION_TYPES.SHOW_TOP_BAR_WITH_TRANSITION:
            return {
                ...state,
                showTopBarWithTransition: true
            };

        case ACTION_TYPES.HIDE_TOP_BAR_WITH_TRANSITION:
            return {
                ...state,
                showTopBarWithTransition: false
            };

        case ACTION_TYPES.SHOW_FOOTER:
            return {
                ...state,
                showFooter: true
            };
        case ACTION_TYPES.HIDE_FOOTER:
            return {
                ...state,
                showFooter: false
            };

        case ACTION_TYPES.TOAST_MESSAGE_ENABLE:
            return {
                ...state,
                toast: {
                    enable: true,
                    message: action.message,
                    variant: action.variant,
                    duration: action.duration
                }
            };

        case ACTION_TYPES.TOAST_MESSAGE_DISABLE:
            return {
                ...state,
                toast: {
                    enable: false,
                    message: '',
                    variant: ''
                }
            };

        // case ACTION_TYPES.SHOW_LOGIN_PAGE_HEADER:
        //     return {
        //         ...state,
        //         showLoginPageHeader: true,
        //         showQuestionnairePageHeader: false,
        //         showNormalHeader: false,
        //     };

        // case ACTION_TYPES.SHOW_QUESTIONNAIRE_PAGE_HEADER:
        //     return {
        //         ...state,
        //         showLoginPageHeader: false,
        //         showQuestionnairePageHeader: true,
        //         showNormalHeader: false,
        //     };
        // case ACTION_TYPES.SHOW_NORMAL_HEADER:
        //     return {
        //         ...state,
        //         showLoginPageHeader: false,
        //         showQuestionnairePageHeader: false,
        //         showNormalHeader: true,
        //     };
        default:
            return state;
    }
};

export default Reducer;
