import React from 'react';
import {SafeAreaView} from 'react-native';

import {Container, BtnLogin, Title, BtnLoginText} from './styles';

import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
    const {signed, signIn} = React.useContext(AuthContext);

    console.log(signed);

    async function handleSignIn() {
        signIn();
    }

    return (
        <SafeAreaView>
            <Container>
                <Title>Login</Title>
                <BtnLogin onPress={handleSignIn}>
                    <BtnLoginText>Sign In</BtnLoginText>
                </BtnLogin>
            </Container>
        </SafeAreaView>
    );
};

export default SignIn;
