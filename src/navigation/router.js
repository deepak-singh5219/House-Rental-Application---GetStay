import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Hometabnavigator from './Hometabnavigator';
import SearchScreen from '../screens/SearchResult';
import GuestScreen from '../screens/GuestScreen';


const Stack = createStackNavigator();

const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name={"Home-Screen"}
                component={Hometabnavigator}
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen
                name={"Destination Search"}
                component={SearchScreen}
                options={{
                    title:"Search your destination"
                }}
                />
                <Stack.Screen
                name={"Guests"}
                component={GuestScreen}
                options={{
                    title:"How many people?"
                }}
                />

                
            </Stack.Navigator>


        </NavigationContainer>
    )
}


export default Router; 