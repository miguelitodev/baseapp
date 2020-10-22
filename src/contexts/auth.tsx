import React, {createContext} from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = React.useState<object | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('user');
            const storagedToken = await AsyncStorage.getItem('token');

            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
        }
        loadStoragedData();
    });

    async function signIn() {
        const response = await auth.signIn();
        setUser(response.user);
        await AsyncStorage.setItem('user', JSON.stringify(response.user));
        await AsyncStorage.setItem('token', response.token);
    }

    async function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{signed: !!user, user: user, signIn, signOut, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
