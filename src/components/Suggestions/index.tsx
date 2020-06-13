import React from 'react';
import {Container, Option, Img, Label} from './styles';
import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';

const Suggestions = () => {
    return (
        <Container>
            <Option>
                <Img source={img1} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img2} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img3} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img4} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img5} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img6} />
                <Label>Doações</Label>
            </Option>
            <Option>
                <Img source={img7} />
                <Label>Doações</Label>
            </Option>
        </Container>
    )
}

export default Suggestions;