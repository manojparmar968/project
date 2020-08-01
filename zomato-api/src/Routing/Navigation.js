import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import ResultShowScreen from '../Screens/ResultShowScreen';

const appNavigation = createStackNavigator (
    {
        Search: SearchScreen,
        ResultShow: ResultShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Restaurant Search'
        }
    }
);

export default createAppContainer(appNavigation);