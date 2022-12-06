import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import { URL_LOGIN } from '../Helpers/Paths';
import { useSelector } from 'react-redux';

function ProtectedRoute(props) {
    const { children } = props;
    const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);

    return (
        <div>
            {!isLoggedIn ? <Navigate replace to={URL_LOGIN} /> : <Fragment>{children}</Fragment>}
        </div>
    );
}

export default ProtectedRoute;
