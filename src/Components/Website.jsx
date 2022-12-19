// CORE
import React from 'react';

import Routes from '../Routes/Route';

// import { ContentWrapper, WebsiteWrapper } from './Website.style.js';
// import Sidebar from 'Components/common/Sidebar/Sidebar.jsx';
import Navigation from '../Components/common/Navigation/Navigation';
// import EventManager from './EventManager/EventManager.jsx';
import { useSelector } from 'react-redux';
// import { connectSocket, NotificationSocket } from 'socket';

// import { useSnackbar } from 'notistack';
// import PushNotification from './common/PushNotification/PushNotification.js';
// import { updateUserInfo } from 'Redux/Auth/Actions.js';
// import { useMemo } from 'react';
// import { NOTIFICATION_TYPE_FOR_API } from 'Helpers/Constants.js';
// import MeditationTimerIcon from 'Assets/images/Header/UserMenu/meditation-timer-icon.svg';
// import SubScriptionIcon from 'Assets/images/Header/UserMenu/subscription.svg';
// import TaoLogo from 'Assets/Logo/heart-in-circle.svg';

function Website() {
    const showSideBarState = useSelector((state) => state.Navigation.showNavBar);

    const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

    return (
        <React.Fragment>
                {showSideBarState && isLoggedIn && <Navigation />}
                
                    <Routes />
        </React.Fragment>
    );
}

export default Website;
