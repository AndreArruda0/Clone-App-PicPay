import React from 'react';
import {Button, Label} from './styles';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PayButton = ({onPress, focused}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={
                    focused
                        ? ['#fff', '#ccc']
                        : ['#00fc6c','#00ac4a']
                }
            >
                <Icon name="attach-money" size={30} color={focused ? '#000' : '#FFF'} />
                <Label style={focused ? {color:'#000'} : {color:'#FFF'}} >Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    )
}

export default PayButton;