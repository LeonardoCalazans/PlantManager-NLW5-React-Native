import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import AuthRoutes from './tab.routes';

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
        <StackRoutes.Screen
            name='PlantSelect'
            component={AuthRoutes}
        />
        <StackRoutes.Screen
            name='PlantSave'
            component={PlantSave}
        />
        <StackRoutes.Screen
            name='MyPlants'
            component={AuthRoutes}
        />
    </StackRoutes.Navigator>
)

export default AppRoutes;