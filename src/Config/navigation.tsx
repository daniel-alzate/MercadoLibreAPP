import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../Screens';
import { Colors } from '../Config/constants'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.amberA400,
      width:200
    }
  })

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
});

const App = createAppContainer(MainNavigator);

export default App;