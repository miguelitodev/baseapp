import React from 'react';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const {signed} = React.useContext(AuthContext);
    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
