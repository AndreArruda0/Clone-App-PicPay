import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Pay from '../pages/Pay';
import PayButton from '../components/PayButton';

const Routes:React.FC = () => {
    const Tab = createBottomTabNavigator();

    const icons = {
        Home:{
            lib:Icon,
            name:'home'
        },
        Wallet:{
            lib:Icon,
            name:'credit-card'
        },
        Notifications:{
            lib:Icon,
            name:'bell'
        },
        Config:{
            lib:Icon,
            name:'cog'
        }
    }

    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, size, focused}) => {
                    if(route.name === 'Pay'){
                        return <PayButton focused={focused} onPress={() => navigation.navigate('Pay')} />;
                    }
                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}
                tabBarOptions={{
                    style:{
                        backgroundColor:'#131418',
                        borderTopColor:'rgba(255,255,255,0.2)'
                    },
                    activeTintColor:'#fff',
                    inactiveTintColor:'#92929c'
                }}
        >
            <Tab.Screen options={{title:'Inicio'}} name="Home" component={Home} />
            <Tab.Screen options={{title:'Carteira'}} name="Wallet" component={Wallet} />
            <Tab.Screen options={{title:''}} name="Pay" component={Pay} />
            <Tab.Screen options={{title:'Notificações'}} name="Notifications" component={Pay} />
            <Tab.Screen options={{title:'Ajustes'}} name="Config" component={Pay} />
        </Tab.Navigator>
    )
}

export default Routes;