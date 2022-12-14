import React, { useEffect } from 'react';
import { Routes as RoutesSwitch, Route, useNavigate } from 'react-router-dom';

// ROUTING COMPONENTS
import ProtectedRoute from './ProtectedRoute';
import RoutesList from './RoutesList';
import { URL_HOME_PAGE, URL_LOGIN } from '../Helpers/Paths';
import Login from '../screen/Login';
import { useSelector } from 'react-redux';

const BEFORE_LOGIN_ACCESSIBLE_PATHS = [
    URL_LOGIN,
    URL_HOME_PAGE
];

function Routes() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
    const userInfo = useSelector((state) => state.Auth.userInfo);

    useEffect(() => {
        if (isLoggedIn && BEFORE_LOGIN_ACCESSIBLE_PATHS?.includes(window?.location?.pathname)) {
            if (userInfo) {
                navigate(URL_HOME_PAGE);
            } else {
                navigate(URL_LOGIN);
            }
        }
        if(!isLoggedIn){
            navigate(URL_LOGIN)
          }
    }, [isLoggedIn, navigate, userInfo]);

    return (
        <RoutesSwitch>
            <Route exact="true" path={URL_LOGIN} element={<Login />} />
            {RoutesList.map((route, index) => (
                <React.Fragment key={index}>
                    {route.hasChildren ? (
                        <Route
                            path={route.path}
                            element={<ProtectedRoute>{route.Component}</ProtectedRoute>}>
                            {route.children}
                        </Route>
                    ) : (
                        <Route
                            path={route.path}
                            element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
                        />
                    )}
                </React.Fragment>
            ))}
        </RoutesSwitch>
    );
}

export default Routes;
