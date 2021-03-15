import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ItemsScreen, DetailScreen } from '../Screens';
import { Colors } from '../Config/constants'

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Mercado Libre',
           headerStyle: {
                backgroundColor: Colors.yellow500,
            },
            headerTintColor: Colors.grey900
        }
    },
    Items: {
        screen: ItemsScreen,
        navigationOptions: {
            title: 'Productos',
            headerStyle: {
                backgroundColor: Colors.yellow500,
            },
            headerTintColor: Colors.grey900
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'Detalle',
            headerStyle: {
                backgroundColor: Colors.yellow500,
            },
            headerTintColor: Colors.grey900
        }
    },
});

const App = createAppContainer(MainNavigator);

export default App;