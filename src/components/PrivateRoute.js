import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('loginData') !== null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
