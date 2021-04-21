import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => ( //AppRoutes esta tipado como React.FC
    <StackRoutes.Navigator //definindo pilha de navegação
        headerMode= 'none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        {/* //definindo como vai ser a navegation */}
        <StackRoutes.Screen
            name='Welcome' //quando chamar por esse nome de tela
            component={Welcome} //vai me devolver esse component
        />
        <StackRoutes.Screen
            name='UserIdentification'
            component={UserIdentification}
        />
        <StackRoutes.Screen
            name='Confirmation'
            component={Confirmation}
        />
    </StackRoutes.Navigator>
)

export default AppRoutes;