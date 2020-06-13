import React from 'react';
import {Container, Header, BalanceContainer, BalanceTitle, Balance, Body} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Suggestions from '../../components/Suggestions';
import Acitivies from '../../components/Activities';

const Home: React.FC = () => {
    return (
        <Container>
            <Body>
                <Header>
                    <Icon name="qrcode" size={30} color='#10c86e' />

                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <Icon name="gift" size={30} color='#10c86e' />
                </Header>

                <Suggestions />

                <Acitivies />
            </Body>
        </Container>
    )
}

export default Home;