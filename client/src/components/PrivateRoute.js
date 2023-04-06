import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/CommonService';

const PrivateRoute = ({ Component }) => {
    console.log('isLogin', isLogin(), Component);
    return (
        isLogin() ?
            <Component/>
        : <Navigate to="/" />
    );
};

export default PrivateRoute;