import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';



const Tab = createBottomTabNavigator();

const Hometabnavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'#f15454',
            tabBarStyle:{
                
                paddingBottom:5,
                height:60,

            }
        }}>
            <Tab.Screen name={"Explore"} component={ExploreNavigator}
            options={{
                tabBarIcon: ({color:string}) => (

                    <Fontisto name="search" size={25} color={'#9C9C9C'} />

                ),
                headerShown:false,

            }}/>
            <Tab.Screen name={"Saved"} component={HomeScreen}
            options={{
                tabBarIcon: ({color:string}) => (

                    <FontAwesome name="heart-o" size={25} color={'#9C9C9C'} />

                ),
                headerShown:false,

            }}/>
            <Tab.Screen name={"GetStay"} component={HomeScreen}
            options={{
                tabBarIcon: ({color:string}) => (

                    <FontAwesome5 name="airbnb" size={25} color={'#9C9C9C'} />

                ),
                headerShown:false

            }}/>
            <Tab.Screen name={"Messages"} component={HomeScreen}
            options={{
                tabBarIcon: ({color:string}) => (

                    <Feather name="message-square" size={25} color={'#9C9C9C'} />

                ),
                headerShown:false

            }}/>
            <Tab.Screen name={"Profile"} component={HomeScreen}
            options={{
                tabBarIcon: ({color:string}) => (

                    <EvilIcons name="user" size={25} color={'#9C9C9C'} />

                ),
                headerShown:false

            }}/>

        </Tab.Navigator>

    )
}

export default Hometabnavigator;