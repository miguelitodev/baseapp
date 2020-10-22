import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
`;
export const BtnLogOut = styled.TouchableOpacity`
    background-color: #4f68ab;
    padding: 15px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnLogOutText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;
