import {createAppContainer, createStackNavigator} from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

/*
 * O createStackNavigator (navegação em pilha) cria um menu no Header
 * da aplicação para possibilitar navegação entre as pages acessadas do app
 * possibilitando voltar para page anterior a atual.
 *
 * O createBottomTabNavigator, cria um menu de navegação na base da aplicação
 * com o formato de abas.
 *
 * O createDrawerNavigator, cria um menu de navegação que é exibido quando
 * se deslisa o dedo da esquerda para direita na tela, mas este Navigator
 * exige uma configuração manual nos arquivos nativos para funcionar no Android.
 */

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
