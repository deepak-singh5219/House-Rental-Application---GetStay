import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultTabNavigator from './SearchResultTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={'Welcome'}
            component={HomeScreen}
            options={{
                headerShown:false,
            }} />

        <Stack.Screen 
        name={'Search Results'}
        component={SearchResultTabNavigator}
        options={{
            title:'Search your destination',
        }}/>
            
        </Stack.Navigator>
    )

}

export default Router;