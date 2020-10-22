import React from 'react';
import {SafeAreaView} from 'react-native';

import {Container, BtnLogOut, Title, BtnLogOutText} from './styles';

import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
    const {signOut} = React.useContext(AuthContext);

    async function handleSignOut() {
        signOut();
    }

    return (
        <SafeAreaView>
            <Container>
                <Title>Dashboard</Title>
                <BtnLogOut onPress={handleSignOut}>
                    <BtnLogOutText>Sign Out</BtnLogOutText>
                </BtnLogOut>
            </Container>
        </SafeAreaView>
    );
};

export default Dashboard;
