import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import Post from './src/components/Posts';
import feed from './assets/images/Airbnb Assets/Airbnb Assets/feed';

import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import SearchScreen from './src/screens/SearchResult';
import GuestScreen from './src/screens/GuestScreen';
import Router from './src/navigation/router';
import ViewPager from '@react-native-community/viewpager';


const App = () => {
  return(
    <>
    {/* <StatusBar barStyle="dark-content"/> */}
    <Router/>
    
    </>
  )
}


export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }

});



// {
//   feed.map((object)=> <Post id={object} data={object}/>)
// }