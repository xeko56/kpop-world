import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/CommonService';

const PublicRoute = ({ Component }) => {
    console.log('isLogin', isLogin());
    return (
        isLogin() ?
            <Component/>
        : <Navigate to="/" />
    );
};

export default PublicRoute;