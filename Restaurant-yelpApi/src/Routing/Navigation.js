import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import ResultShowScreen from '../Screens/ResultShowScreen';

const appNavigator = createStackNavigator (
    {
    Search:SearchScreen,
    ResultShow: ResultShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    }
);

export default createAppContainer(appNavigator);
