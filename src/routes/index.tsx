import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const {signed, loading} = React.useContext(AuthContext);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
            </View>
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
