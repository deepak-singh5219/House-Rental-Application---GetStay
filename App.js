import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import HomeScreen from './src/screens/Home';



const App = () => {
  return(
    <>
    <View>
    
    <HomeScreen/>

    </View>
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