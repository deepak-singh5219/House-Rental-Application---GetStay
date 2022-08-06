import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import HomeScreen from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = () => {
  return (
    

    <Tab.Navigator>
        <Tab.Screen name={"List"} component={SearchResultScreen} />
        <Tab.Screen name={"Map"} component={HomeScreen} />
    </Tab.Navigator>
    
  )
}

export default SearchResultTabNavigator;