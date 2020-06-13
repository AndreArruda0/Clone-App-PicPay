import React from 'react';
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    Username,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
} from './styles';
import avatar from '../../assets/avatar.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activities:React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@AndreAG</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username>AndreAG</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$36,00</Value>

                        <Divider />

                        <Date>
                            <Icon name="lock" color="#FFF" /> a 2 anos.
                        </Date>
                    </Details>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default Activities;